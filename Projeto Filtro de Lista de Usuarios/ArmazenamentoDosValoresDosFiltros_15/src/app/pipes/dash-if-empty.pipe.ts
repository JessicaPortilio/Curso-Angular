// Importa as funcionalidades necessárias do Angular para criar um pipe (transformador de dados).
import { Pipe, PipeTransform } from '@angular/core';

// Define um novo pipe chamado "dashIfEmpty" que pode ser usado para transformar valores nos templates do Angular.
@Pipe({
  name: 'dashIfEmpty' // Nome do pipe, que será usado nos templates como {{ valor | dashIfEmpty }}.
})
// Cria a classe do pipe, implementando a interface `PipeTransform` para garantir que tenha a função necessária para transformar os dados.
export class DashIfEmptyPipe implements PipeTransform {
  
  // Define a função que transforma os dados. Ela recebe um valor de entrada e retorna o valor transformado.
  transform(value: any): string | any {
    // Verifica se o valor de entrada é vazio. Um valor é considerado vazio se for indefinido, nulo ou uma string vazia.
    const IS_EMPTY = value === undefined || value === null || value === '';

    // Se o valor for vazio, retorna um traço ("-") como substituto.
    if(IS_EMPTY){
      return '-';
    }

    // Se o valor não for vazio, retorna o valor original sem alterações.
    return value;
  }

}

