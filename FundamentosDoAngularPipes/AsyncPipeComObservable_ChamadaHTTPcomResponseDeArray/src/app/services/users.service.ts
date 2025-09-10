import { HttpClient } from '@angular/common/http'; // Ferramenta do Angular para fazer requisições HTTP (buscar dados na internet).
import { Injectable } from '@angular/core'; // Usado para transformar essa classe em um "serviço" que pode ser injetado em outros lugares.
import { Observable, of } from 'rxjs'; // Observable é um tipo especial usado para lidar com dados assíncronos (que chegam depois).
import { IUserResponse } from '../interfaces/user-response.interfaces'; // Interface que define o formato de um usuário individual.
import { UserListResponse } from '../types/users-list-response.type'; // Tipo que define o formato de uma lista de usuários.

// @Injectable transforma essa classe em um "serviço" que o Angular pode gerenciar
@Injectable({
    providedIn: 'root', // Significa que esse serviço vai estar disponível em toda a aplicação.
})
export class UsersService {
    // O HttpClient será usado para buscar dados de uma API.
    constructor(
        private readonly _http: HttpClient
    ) { }

    // Método para buscar TODOS os usuários
    getUsers(): Observable<UserListResponse> {
        // return of([{
        //     "id": 1,
        //     "name": "Leanne Graham",
        //     "username": "Bret",
        //     "email": "Sincere@april.biz",
        //     "address": {
        //         "street": "Kulas Light",
        //         "suite": "Apt. 556",
        //         "city": "Gwenborough",
        //         "zipcode": "92998-3874",
        //         "geo": {
        //             "lat": "-37.3159",
        //             "lng": "81.1496"
        //         }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //         "name": "Romaguera-Crona",
        //         "catchPhrase": "Multi-layered client-server neural-net",
        //         "bs": "harness real-time e-markets"
        //     }
        // },]);

        // Isso retorna uma lista de usuários como resposta.
        return this._http.get<UserListResponse>('https://jsonplaceholder.typicode.com/users')
    }

    // Método para buscar apenas UM usuário pelo ID
    getUserByID(userId: number): Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }
}