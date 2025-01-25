// Define como deve ser a estrutura do status do usuário
export interface IStatus {
    online: boolean; // Indica se o usuário está online
    verificado: boolean; // Indica se o usuário foi verificado
    assinaturaAtiva: boolean; // Indica se o usuário tem uma assinatura ativa
    ultimoAcesso: string; // Data e hora do último acesso do usuário
}