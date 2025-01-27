// Importa a funcionalidade necessária para criar pipes personalizados no Angular.
import { Pipe, PipeTransform } from '@angular/core';

// Declara e define o pipe personalizado com o nome `phone`.
@Pipe({
  name: 'phone' // Este nome será usado no HTML para aplicar o pipe.
})
// Classe que implementa a lógica de transformação dos números de telefone.
export class PhonePipe implements PipeTransform {

  // Função que transforma o número do telefone recebido.
  transform(phone: string): string {
    // Verifica se o número do telefone é inválido (muito curto ou muito longo).
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;
    if (INVALID_PHONE) {
      return 'Telefone indisponível ou inválido'; // Mensagem para números inválidos.
    }

    // Verifica se o número tem 11 dígitos (telefone celular no Brasil).
    const CELLPHONE = phone.length === 11;
    if (CELLPHONE) {
      // Formata o número no formato (XX) XXXXX-XXXX.
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    } else {
      // Formata o número no formato (XX) XXXX-XXXX.
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
    }
  }
}
