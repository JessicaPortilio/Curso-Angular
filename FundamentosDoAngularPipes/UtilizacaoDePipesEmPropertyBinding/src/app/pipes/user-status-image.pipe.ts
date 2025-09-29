// Importa o decorator @Pipe e a interface PipeTransform do Angular.
// @Pipe transforma essa classe em um "pipe" que pode ser usado no template: {{ valor | userStatusImage }}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'userStatusImage' // nome do pipe que você usa no template: [src]="user.status | userStatusImage"
})
export class UserStatusImagePipe implements PipeTransform {
    // O método transform é obrigatório em todo pipe. Recebe o valor de entrada e retorna o valor formatado.
    // No seu caso: recebe um número (userStatus) e retorna uma string com o caminho da imagem.
    transform(userStatus: number): string {
        // console.log útil em desenvolvimento para ver quando o pipe é executado.
        // Em produção, remova logs para não poluir o console.
        console.log('UserStatusImagePipe')

        // "statusImages" é um mapa que liga cada código de status a um caminho de imagem.
        // Nota: as chaves aqui são números (1, 2) e o TypeScript usa { [key:number]: string }.
        const statusImages: { [key:number]: string} = {
            1: 'icons/usuario-verificado.png', // para status 1 (ativo) mostramos esse ícone
            2: 'icons/remover-usuario.png'     // para status 2 (inativo) mostramos outro ícone
        };

        // Retorna o caminho correspondente ao status recebido.
        // Se userStatus for algo que não exista no mapa, o retorno será undefined.
        // Recomenda-se adicionar um fallback (ex.: 'icons/default.png') para evitar img quebrada.
        return statusImages[userStatus]
    }
}
