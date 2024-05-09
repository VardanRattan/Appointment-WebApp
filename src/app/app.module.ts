import { ExampleComponent } from './components/example.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      ExampleComponent
        ],
          imports: [
              BrowserModule
                ],
                  providers: [],
                    bootstrap: [AppComponent]
                    })
                    export class AppModule { }