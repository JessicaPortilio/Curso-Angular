// Importa a função "bootstrapApplication" que inicia a aplicação Angular no navegador.
// Essa função é responsável por carregar o aplicativo e associá-lo à página HTML.
import { bootstrapApplication } from '@angular/platform-browser';

// Importa a configuração da aplicação, onde estão definidas funcionalidades como rotas e provedores.
import { appConfig } from './app/app.config';

// Importa o componente principal da aplicação, que será o ponto de entrada para renderizar todo o conteúdo.
import { AppComponent } from './app/app.component';

// Inicializa a aplicação Angular, usando o componente principal e as configurações fornecidas.
bootstrapApplication(AppComponent, appConfig) 
  // Trata possíveis erros durante a inicialização da aplicação.
  .catch((err) => console.error(err)); 
