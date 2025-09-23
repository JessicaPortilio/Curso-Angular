// Pipe/Função que transforma um valor para exibição no template
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status' // nome que usamos no template: {{ valor | status }}
})
export class StatusPipe implements PipeTransform {
    transform(userStatus: number): string {
        // Esse console.log mostra quando o pipe é executado.
        // Se o pipe for puro (padrão), ele só roda quando o valor de entrada muda.
        console.log('status pipe')

        // Mapa de conversão: número -> texto
        const status: { [key: string]: string} = {
            1: 'Ativo',
            2: 'Inativo',
        };

        // Retorna o texto correspondente ao código de status.
        // Observação: se userStatus for undefined ou um valor não mapeado, o retorno será undefined.
        return status[userStatus]
    }
}
