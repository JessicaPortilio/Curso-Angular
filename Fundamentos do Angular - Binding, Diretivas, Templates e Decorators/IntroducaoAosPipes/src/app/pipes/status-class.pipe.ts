import { Pipe, PipeTransform } from "@angular/core"; // Importa funcionalidades para criar pipes

@Pipe({
    name: 'statusClass' // Define o nome do pipe usado no template
})
export class StatusClassPipe implements PipeTransform { // Cria o pipe para transformar dados
    transform(status: number): string { // Método responsável por transformar o status
        console.log('StatusClassPipe'); // Exibe no console quando o pipe é executado

        // if(status === 1) {
        //     return 'ativa';
        // }else if(status === 2){
        //     return 'parcial';
        // }
        // else {
        //     return 'bloqueado';
        // }

        // Cria um objeto que mapeia os números do status para os nomes das classes CSS
        const obj:{[key: number]: string}= {
            1: 'ativa', // Status 1 corresponde à classe "ativa"
            2: 'parcial', // Status 2 corresponde à classe "parcial"
            3: 'bloqueado' // Status 3 corresponde à classe "bloqueado"
        };

        return obj[status]; // Retorna o nome da classe correspondente ao status
    }

    // Explicação:
    //     @Pipe: Define um pipe personalizado chamado statusClass.
    //     transform(status: number): string: Método que transforma o número do status em um nome de classe CSS.
    //     Objeto obj: Mapeia cada status (1, 2, 3) para uma classe CSS ('ativa', 'parcial', 'bloqueado').
    //     return obj[status]: Retorna o nome da classe CSS correspondente ao status recebido.

}


