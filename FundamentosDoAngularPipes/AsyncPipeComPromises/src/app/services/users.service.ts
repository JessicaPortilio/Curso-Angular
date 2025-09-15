import { Injectable } from "@angular/core";
// Injectable marca a classe para que o Angular possa injetá-la em outros lugares.

import { IUser } from "../interfaces/user.interface";
// Interface simples para usuário (apenas os campos básicos usados na Promise).

import { HttpClient } from "@angular/common/http";
// HttpClient é a ferramenta do Angular para fazer requisições HTTP (GET, POST...).

import { IUserResponse } from "../interfaces/user-response.interfaces";
// Interface completa que descreve a resposta real da API (endereço, empresa, etc).

import { Observable } from "rxjs";
// Observable é o "fluxo" de dados do RxJS, usado pelo HttpClient.

@Injectable({
    providedIn: 'root', // O serviço é criado uma única vez e disponível em toda a aplicação
})
export class UsersService {
    constructor(private readonly _http: HttpClient ) {
        // O HttpClient é injetado no construtor para ser usado nos métodos abaixo.
    }

    /* -------------------------------------------------------------
        Exemplo de método que retorna uma Promise com dados "mockados".
        - Serve para simular uma chamada assíncrona que demora (setTimeout).
        - Promise resolve UMA vez e não pode ser "cancelada".
        - Útil para simular carregamento ou quando você usa APIs/SDKs que já retornam Promises.
      ------------------------------------------------------------- */
    getUser(): Promise<IUser> {
        // Cria e retorna uma nova Promise que resolve após 3 segundos
        return new Promise<IUser>((resolve, reject) => {
            setTimeout(() => {
                // Quando o tempo expira, chamamos resolve com um objeto IUser
                resolve({
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                })
            }, 3000);
        });
    }

    /* -------------------------------------------------------------
        Método que retorna um Observable vindo do HttpClient.
        - HttpClient.get<T>() produz um Observable<T> que:
            * faz a requisição quando alguém se inscreve (lazy)
            * emite o resultado (objeto) e completa (no caso de requisições HTTP)
        - Observables podem ser cancelados (unsubscribe) — vantagem quando precisamos abortar.
      ------------------------------------------------------------- */
    getUserById(userId: number): Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }
}
