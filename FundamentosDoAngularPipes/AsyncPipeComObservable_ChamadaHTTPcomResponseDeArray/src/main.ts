import { HttpClientModule } from '@angular/common/http'; // Necessário para habilitar chamadas HTTP
import { bootstrapApplication } from '@angular/platform-browser'; // Função que inicia a aplicação Angular
import { appConfig } from './app/app.config'; // Configurações da aplicação
import { App } from './app/app'; // Componente principal (raiz)
import { importProvidersFrom } from '@angular/core'; // Função para importar módulos como provedores

// Inicializa a aplicação Angular
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Garante que os provedores existentes sejam mantidos
    importProvidersFrom(HttpClientModule) // Importa o módulo HttpClient, habilitando requisições HTTP
  ]
})
  .catch((err) => console.error(err)); // Caso dê erro, ele será exibido no console.
