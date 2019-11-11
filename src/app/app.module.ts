import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GeneratorComponent } from './generator/generator.component';
/*FormsModule needed for [(ngModel)] */
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    /*FormsModule needed for [(ngModel)] */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
