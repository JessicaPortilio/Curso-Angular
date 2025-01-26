// Importa o tipo (interface) de usuário de outro arquivo para ser utilizado aqui
import { IUser } from "../interfaces/user/user.interface";

// Cria uma lista de usuários fictícios usando a interface IUser para definir o formato esperado
export const UsersList: IUser[] = [
    {
        // Nome completo do usuário
        nome: "João Silva",
        // E-mail do usuário
        email: "joao.silva@example.com",
        // Senha do usuário
        senha: "senha-segura-123",
        // Idade do usuário
        idade: 30,
        // Endereço completo do usuário, incluindo rua, número, cidade, estado e país
        endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        // Número de telefone do usuário
        telefone: "11912345678",
        // Indica se o usuário está ativo (true) ou inativo (false)
        ativo: true,
        // Função ou cargo do usuário na empresa ou sistema
        funcao: "Desenvolvedor",
        // Data em que o usuário foi cadastrado no sistema
        dataCadastro: "2023-08-01T09:00:00.000Z",
        // Status do usuário, contendo informações sobre sua atividade no sistema
        status: {
            // Indica se o usuário está online no momento
            online: true,
            // Mostra se o usuário foi verificado (por exemplo, através de e-mail)
            verificado: true,
            // Indica se o usuário possui uma assinatura ativa
            assinaturaAtiva: true,
            // Última vez que o usuário acessou o sistema
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
        }
    },
    // Mais usuários com informações semelhantes...
    {
        nome: "Maria Fernandes",
        email: "maria.fernandes@example.com",
        senha: "Maria123",
        idade: 25,
        endereco: {
            rua: "Avenida do Sol",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21956789101",
        ativo: false,
        funcao: "Designer",
        dataCadastro: "2023-08-05T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-06T09:00:00.000Z"
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "Carlos456",
        idade: 40,
        endereco: {
            rua: "Praça da Liberdade",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31911121314",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: "2023-08-10T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-12T09:00:00.000Z"
        }
    },
    {
        nome: "Ana Sousa",
        email: "ana.sousa@example.com",
        senha: "Ana789",
        idade: 22,
        endereco: {
            rua: "Rua das Pedras",
            numero: 80,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51915161718",
        ativo: false,
        funcao: "Analista",
        dataCadastro: "2023-08-15T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-18T09:00:00.000Z"
        }
    },
    {
        nome: "Pedro Mendes",
        email: "pedro.mendes@example.com",
        senha: "Pedro012",
        idade: 35,
        endereco: {
            rua: "Boulevard Central",
            numero: 60,
            cidade: "Recife",
            estado: "PE",
            pais: "Brasil"
        },
        telefone: "81919202122",
        ativo: true,
        funcao: "Diretor",
        dataCadastro: "2023-08-20T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-25T09:00:00.000Z"
        }
    }
];
