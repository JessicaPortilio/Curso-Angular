// Interface que representa a resposta completa da API para um usuário
export interface IUserResponse {
    id: number            // id do usuário
    name: string          // nome completo
    username: string      // username/apelido
    email: string         // e-mail
    address: Address      // endereço (objeto complexo)
    phone: string         // telefone
    website: string       // site
    company: Company      // empresa (objeto complexo)
}

// Estrutura do endereço (campo 'address')
interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo               // coordenadas geográficas
}

interface Geo {
    lat: string
    lng: string
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}
