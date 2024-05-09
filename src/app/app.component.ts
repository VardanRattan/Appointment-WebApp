import { Component } from '@angular/core';
import { ExampleComponent } from './components/example.component';

@Component({
  selector: 'app-root',
    template: `
        <h1>Hello, Angular!</h1>
            <app-example></app-example> <!-- Use the ExampleComponent -->
              `
          })
          export class AppComponent {}