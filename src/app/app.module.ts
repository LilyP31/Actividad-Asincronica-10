import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeccionesModule } from './secciones/secciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeccionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
