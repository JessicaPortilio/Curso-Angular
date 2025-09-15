// Pipe e interface PipeTransform para criar pipes no Angular.
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status',   // nome usado no template: {{ valor | status }}
    pure: true        // pure: true indica que o pipe é puro (padrão). Vou explicar abaixo.
})
export class StatusPipe implements PipeTransform {
    transform(userStatus: number): string {
        // Console log aqui serve só para DEBUG — em produção remova para não poluir o console.
        console.log('status pipe');

        // Mapa simples que transforma o número do status em uma string legível.
        // As chaves aqui são strings, mas quando você faz status[userStatus], o JS converte o número para string.
        const status: { [key: string]: string } = {
            1: 'Ativo',
            2: 'Inativo'
        };

        // Retorna o texto correspondente ao número recebido.
        // Observação: se userStatus não estiver no mapa, isso vai retornar undefined.
        // Seria melhor retornar um fallback (ex.: 'Desconhecido') — veja a sugestão abaixo.
        return status[userStatus];
    }
}
