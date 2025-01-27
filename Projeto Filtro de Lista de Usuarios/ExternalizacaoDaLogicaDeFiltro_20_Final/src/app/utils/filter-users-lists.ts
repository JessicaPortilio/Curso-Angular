import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

// Função para filtrar usuários com base no nome.
const filterUsersListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
    // Verifica se nenhum nome foi digitado no campo de busca.
    const NAME_NOT_TYPED = name === undefined;

    // Se nenhum nome foi digitado, retorna a lista original sem alterações.
    if (NAME_NOT_TYPED) {
        return userList;
    }

    // Filtra a lista de usuários, mantendo apenas os que contêm o nome buscado (ignora maiúsculas/minúsculas).
    const filteredList = userList.filter((user) =>
        user.nome.toLowerCase().includes(name.toLowerCase())
    );

    // Retorna a lista filtrada com base no nome.
    return filteredList;
}

// Função para filtrar usuários com base no status (ativo ou inativo).
const filterUsersListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
    // Verifica se o filtro de status não foi selecionado (é indefinido).
    const STATUS_NOT_SELECTED = status === undefined;

    // Se o filtro de status não foi selecionado, retorna a lista original sem alterações.
    if (STATUS_NOT_SELECTED) {
        return userList;
    }

    // Filtra a lista, mantendo apenas os usuários cujo status corresponde ao selecionado.
    const filteredList = userList.filter((user) =>
        user.ativo === status
    );

    // Retorna a lista filtrada.
    return filteredList;
}

// Função que filtra os usuários com base em um intervalo de datas.
const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    // Verifica se as datas de início ou fim não foram selecionadas ou estão nulas.
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined || startDate === null || endDate === null;

    // Se as datas não foram selecionadas, retorna a lista original sem aplicar filtros
    if (DATES_NOT_SELECTED) {
        return userList
    }

    // Ajusta o `endDate` para incluir o dia inteiro, até as 23:59:59.
    const adjustedEndDate = new Date(endDate);
    adjustedEndDate.setHours(23, 59, 59, 999);

    // Filtra a lista de usuários com base no intervalo de datas (início e fim).
    const listFiltered = userList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: adjustedEndDate,
    }));

    // Retorna a lista de usuários que estão dentro do intervalo de datas
    return listFiltered
}

// Função auxiliar para filtrar a lista de usuários com base nas opções de filtro.
const filterUserList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
    // Inicializa uma lista temporária para armazenar os resultados filtrados.
    let filteredList: IUser[] = [];

    // Filtra os usuários pelo nome, chamando uma função dedicada a isso.
    filteredList = filterUsersListByName(filterOptions.name, userList);

    // Filtra os usuários pelo status (ativo ou inativo), combinando com os resultados anteriores.
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

    // Aplica o filtro de datas (cadastro entre duas datas) na lista filtrada.
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    // Exibe a lista filtrada no console (útil para depuração).
    //console.log(filteredList)
    // Retorna a lista final de usuários filtrados.
    return filteredList;
}

export { filterUserList };