// Pipe e interface para criação de pipes no Angular.
import { Pipe, PipeTransform } from "@angular/core";

// @Pipe registra essa classe como um pipe reutilizável no template.
// name: 'trancate' é o nome que você usa no template: {{ texto | trancate:3 }}
@Pipe({
    name: 'trancate'
})
export class TrancatePipe implements PipeTransform {
    /*
        transform(value: string, maxLength: number): string
        - value: o texto que chega do template (ex.: pessoa.nome).
        - maxLength: parâmetro que você passa no template (ex.: | trancate : 3).
        - o método retorna a string pronta para exibição.
    */
    transform(value: string, maxLength: number): string {
        // Se não houver valor (null/undefined/''), devolve string vazia para evitar erros.
        if (!value) {
            return '';
        }

        // Constante booleana para deixar o código mais legível:
        // checa se o tamanho do texto é menor ou igual ao máximo permitido.
        const VALUE_LESS_THAN_MAX_LENGTH = value.length <= maxLength;

        // Se o texto já for menor que o limite, devolvemos ele inteiro (sem cortar).
        if (VALUE_LESS_THAN_MAX_LENGTH) {
            return value;
        }
        
        // Se passou do limite, retornamos apenas os primeiros `maxLength` caracteres
        // e adicionamos "..." para indicar que foi truncado.
        return value.slice(0, maxLength) + '...';
    }
}
