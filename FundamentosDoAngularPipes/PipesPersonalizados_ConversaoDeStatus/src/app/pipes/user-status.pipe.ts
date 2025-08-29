// Importa o decorator @Pipe (para declarar que essa classe é um pipe)
// e a interface PipeTransform (que exige que a classe implemente o método transform).
import { Pipe, PipeTransform } from "@angular/core";

// Importa o enum para podermos usar os nomes legíveis (UserStatusEnum.ATIVO) em vez de números "mágicos".
import { UserStatusEnum } from "../app.component";

/*
    @Pipe configura o pipe.
    - name: 'userStatus' é o nome que vamos usar no template: {{ valor | userStatus }}
*/
@Pipe({
    name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
    /*
        O método transform é obrigatório para todo pipe.
        - userStatus: é o valor que chega do template (neste caso, um número).
        - retornamos uma string que será exibida na tela.
    */
    transform(userStatus: number): string {
        // if(userStatus === UserStatusEnum.ATIVO) {
        //     return 'Ativo';
        // } else if (UserStatusEnum.INATIVO) {
        //     return 'Inativo';
        // } else {
        //     return 'Inválido';
        // }
        
        // --------- EXPLICAÇÃO DA VERSÃO COM MAPA (atual) ----------
        // Criamos um "mapa" (objeto) que liga cada valor numérico a um texto.
        // A chave é um número (o status) e o valor é a string que queremos mostrar.
        // Usar um mapa é uma forma limpa e fácil de ler/atualizar.
        const userStatusDescription : {[key: number] : string} = {
            [UserStatusEnum.ATIVO]: 'Ativo',   // se userStatus for 1 -> mostra 'Ativo'
            [UserStatusEnum.INATIVO]: 'Inativo', // se userStatus for 2 -> mostra 'Inativo'
        }

        // Se o mapa tiver uma descrição para o número recebido, retornamos ela.
        // Caso contrário, retornamos 'Inválido' como fallback (proteção para valores inesperados).
        return userStatusDescription[userStatus] ? userStatusDescription[userStatus] :'Inválido'; 
    }
}
