// Interface principal: define o que esperamos receber da API para um usuário.
// Interfaces ajudam o TypeScript a garantir que usamos os campos corretos no código.
export interface IUserResponse {
    id: number           // id do usuário
    name: string         // nome completo
    username: string     // nome de usuário (login/apelido)
    email: string        // email
    address: Address     // endereço (objeto complexo)
    phone: string        // telefone
    website: string      // site
    company: Company     // empresa (objeto)
}

// Address: descreve o formato do campo "address" dentro do usuário
interface Address {
    street: string       // rua
    suite: string        // complemento / suíte
    city: string         // cidade
    zipcode: string      // CEP
    geo: Geo             // coordenadas geográficas (lat/lng como strings)
}

// Geo: latitude/longitude vindas como string na API de exemplo
interface Geo {
    lat: string
    lng: string
}

// Company: informações sobre a empresa do usuário
interface Company {
    name: string         // nome da empresa
    catchPhrase: string  // slogan / frase de efeito da empresa
    bs: string           // área/descrição curta (campo de exemplo da API)
}
