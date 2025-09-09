// HttpClientModule: módulo que fornece HttpClient (o serviço que faz requisições HTTP).
import { HttpClientModule } from '@angular/common/http';

// Função para iniciar a aplicação com a API de bootstrap moderna (standalone)
import { bootstrapApplication } from '@angular/platform-browser';

// Configurações da sua aplicação (rotas, providers, etc) - import opcional do seu projeto
import { appConfig } from './app/app.config';

// Componente raiz (standalone ou não) que será inicializado
import { App } from './app/app';

// importProvidersFrom permite registrar módulos (como HttpClientModule) no provider tree quando se usa bootstrapApplication
import { importProvidersFrom } from '@angular/core';

// Aqui iniciamos a aplicação e garantimos que HttpClientModule esteja disponível globalmente.
// Isso é necessário para que qualquer serviço que injete HttpClient (como o UsersService) funcione.
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(HttpClientModule) // registra HttpClientModule no bootstrap
  ]
})
  .catch((err) => console.error(err)); // trata erro de bootstrap (registro no console)
