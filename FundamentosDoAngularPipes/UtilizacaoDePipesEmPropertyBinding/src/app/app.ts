// CommonModule: traz diretivas e pipes padrão do Angular (como *ngIf, *ngFor e outros helpers).
import { CommonModule } from '@angular/common';

// Component: decorator que transforma a classe abaixo em um componente Angular.
import { Component } from '@angular/core';

// Importamos o pipe StatusPipe que criamos — assim o Angular sabe onde encontrá-lo
// quando usamos o nome do pipe no template (| status).
import { StatusPipe } from "./pipes/status.pipe";
import { UserStatusImagePipe } from './pipes/user-status-image.pipe';

@Component({
  selector: 'app-root',            // Tag HTML que representa esse componente: <app-root>
  imports: [CommonModule, StatusPipe, UserStatusImagePipe], // Módulos/declarações usados neste componente
                                       // (OBS: usar 'imports' no @Component funciona quando o componente
                                       // é standalone; se não for, registre o pipe e o CommonModule no NgModule)
  templateUrl: './app.html',       // Arquivo HTML que contém a marcação desse componente
  styleUrl: './app.scss'           // Arquivo de estilos (geralmente usa-se styleUrls: [...] mas está ok)
})
export class App {
  // Lista de usuários exibida no template.
  // Cada usuário tem um nome e um status (1 = ativo, 2 = inativo).
  users = [
    { name: 'Jessica', status: 1 },
    { name: 'João',    status: 2 },
    { name: 'Laura',   status: 1 },
    { name: 'José',    status: 2 },
  ];

  // Método chamado quando o usuário clica em "Inativar Usuário".
  // Recebe o índice do usuário no array e altera a propriedade status para 2 (inativo).
  // Isso **muta** o objeto dentro do array — o Angular detecta a mudança e atualiza a tela.
  inactivateUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  // Método que adiciona um novo usuário ao array.
  // push() modifica (muta) o array existente e faz com que o *ngFor crie um novo item na tela.
  addUser() {
    this.users.push({
      name: 'Julia',
      status: 1,
    });
  }


  getUserImage(userStatus: number): string {
    console.log('getUserImage')
    const statusImages: { [key:number]: string} = {
            1: 'icons/usuario-verificado.png',
            2: 'icons/remover-usuario.png'
        };

        return statusImages[userStatus]
  }
}