// Importa as funcionalidades básicas para criar um Pipe no Angular.
import { Pipe, PipeTransform } from '@angular/core';
// Importa a interface de endereço para garantir que o pipe manipule o tipo correto de dado.
import { IAddress } from '../interfaces/user/address.interface';

// Define o Pipe com o nome 'address', para ser usado no HTML.
@Pipe({
  name: 'address'
})
// Cria a classe do Pipe que implementa a interface PipeTransform.
export class AddressPipe implements PipeTransform {
  // O método transform é chamado automaticamente quando o pipe é usado no HTML.
  transform(address: IAddress): string {
    // Verifica se algum dos campos do endereço está vazio ou inválido.
    const INVALID_ADDRESS = !address || !address.rua || !address.cidade || 
                            !address.estado || address.numero === null || 
                            address.numero === undefined;

    // Se o endereço for inválido, retorna um texto padrão indicando que o endereço não está disponível.
    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido';
    }

    // Caso o endereço seja válido, retorna o formato completo do endereço.
    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
