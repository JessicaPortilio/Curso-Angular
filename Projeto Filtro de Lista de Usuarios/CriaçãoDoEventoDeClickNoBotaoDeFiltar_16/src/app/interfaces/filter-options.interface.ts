export interface IFilterOptions {
    // Campo para o nome do filtro. É uma string ou indefinido (caso o usuário não insira nada)
    name: string | undefined;
    // Campo para a data inicial do filtro. É do tipo `Date` ou indefinido
    startDate: Date | undefined;
    // Campo para a data final do filtro. É do tipo `Date` ou indefinido
    endDate: Date | undefined;
    // Campo para o status do filtro. É um booleano (ativo ou inativo) ou indefinido
    status: boolean | undefined;
    
}
