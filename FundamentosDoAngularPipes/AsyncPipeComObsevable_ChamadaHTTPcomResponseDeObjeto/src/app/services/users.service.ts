// HttpClient é a classe do Angular usada para fazer requisições HTTP (GET, POST, etc).
import { HttpClient } from "@angular/common/http";

// Injectable marca a classe como um serviço que pode ser injetado em outros lugares.
import { Injectable } from "@angular/core";

// Observable é o tipo que representa um "fluxo" de dados que chega ao longo do tempo.
// O HttpClient retorna Observables para que possamos reagir quando a resposta chegar.
import { Observable } from "rxjs";

// Interface que descreve a estrutura esperada da resposta de usuário.
import { IUserResponse } from "../interfaces/user-response.interfaces";

@Injectable ({
    // providedIn: 'root' significa que o serviço é criado uma vez e está disponível em toda a aplicação.
    providedIn: 'root',
})
export class UsersService {

    // Injetamos o HttpClient no construtor para podermos usar seus métodos (get/post...).
    constructor(
        private readonly _http: HttpClient
    ){}

    // getUserById: método público que retorna um Observable com os dados do usuário.
    // - userId: número do usuário que queremos buscar.
    // - Observable<IUserResponse>: quando assinarmos esse Observable, receberemos um objeto com a forma definida por IUserResponse.
    getUserById(userId: number): Observable<IUserResponse> {
        // Faz uma requisição GET para o endpoint (API de exemplo jsonplaceholder).
        // O HttpClient já converte o JSON em objeto e cria um Observable que emite a resposta e então completa.
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }

}
