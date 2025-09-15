import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// bootstrapApplication inicializa a aplicação Angular moderna.
// importProvidersFrom(HttpClientModule) registra o HttpClientModule para que o HttpClient
// possa ser injetado (como no UsersService).
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
      importProvidersFrom(HttpClientModule)
  ]
})
  .catch((err) => console.error(err));
