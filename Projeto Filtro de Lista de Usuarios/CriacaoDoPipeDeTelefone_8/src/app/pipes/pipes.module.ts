// Importa a funcionalidade principal para definir módulos no Angular.
import { NgModule } from "@angular/core";
// Importa o pipe personalizado que formata números de telefone.
import { PhonePipe } from "./phone.pipe";

// Define um módulo chamado `PipesModule`.
@NgModule({
    // Declarações são onde você registra as classes (componentes, pipes, etc.) criadas neste módulo.
    declarations: [],

    // Importa o `PhonePipe` para que possa ser usado em outros lugares neste módulo.
    imports: [
        PhonePipe
    ],

    // Exporta o `PhonePipe` para que outros módulos ou componentes possam usá-lo.
    exports: [
        PhonePipe
    ]
})
// Exporta o módulo `PipesModule` para que outros módulos possam utilizá-lo.
export class PipesModule {}
