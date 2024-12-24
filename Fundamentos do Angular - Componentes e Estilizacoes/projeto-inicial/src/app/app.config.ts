// Importa a configuração principal da aplicação Angular e uma função que otimiza a detecção de alterações.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

// Importa a funcionalidade necessária para configurar as rotas (caminhos) da aplicação.
import { provideRouter } from '@angular/router';

// Importa as definições de rotas da aplicação, que indicam quais componentes devem ser carregados para cada caminho.
import { routes } from './app.routes';

// Cria uma configuração principal para a aplicação Angular.
export const appConfig: ApplicationConfig = { 
  // Define os provedores (serviços ou funcionalidades) usados na aplicação.
  providers: [ 
    // Configura a detecção de alterações com otimizações para reduzir a quantidade de eventos processados.
    provideZoneChangeDetection({ eventCoalescing: true }), 

    // Configura o roteamento da aplicação com base nas rotas definidas no arquivo 'app.routes'.
    provideRouter(routes) 
  ] 
};