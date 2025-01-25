// Importa a interface que define como o endereço deve ser estruturado
import { IAddress } from "./address.interface";
// Importa a interface que define como o status do usuário deve ser estruturado
import { IStatus } from "./status.interface";

// Define como deve ser a estrutura de um usuário no sistema
export interface IUser {
    nome: string; // Nome do usuário
    email: string; // Endereço de e-mail do usuário
    senha: string; // Senha do usuário
    idade: number; // Idade do usuário
    endereco: IAddress; // Endereço completo, utilizando outra interface
    telefone: string; // Número de telefone
    ativo: boolean; // Indica se o usuário está ativo
    funcao: string; // Cargo ou função do usuário
    dataCadastro: string; // Data de cadastro do usuário
    status: IStatus; // Status do usuário, utilizando outra interface
}