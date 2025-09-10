// Interface: descreve como um "usuário" deve ser representado no sistema
export interface IUserResponse {
    id: number;        // Identificador único do usuário
    name: string;      // Nome completo
    username: string;  // Nome de usuário (login)
    email: string;     // E-mail
    address: Address;  // Endereço completo
    phone: string;     // Telefone
    website: string;   // Site pessoal/empresa
    company: Company;  // Empresa associada
}

// Estrutura do endereço
interface Address {
    street: string;   // Rua
    suite: string;    // Número ou complemento
    city: string;     // Cidade
    zipcode: string;  // CEP
    geo: Geo;         // Localização geográfica (lat/lng)
}

// Estrutura de localização geográfica
interface Geo {
    lat: string; // Latitude
    lng: string; // Longitude
}

// Estrutura da empresa
interface Company {
    name: string;        // Nome da empresa
    catchPhrase: string; // Frase de impacto da empresa
    bs: string;          // Área de atuação / missão
}
