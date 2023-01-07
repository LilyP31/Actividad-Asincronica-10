import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteC01Component } from './componente-c01/componente-c01.component';
import { ComponenteC02Component } from './componente-c02/componente-c02.component';
import { ComponenteC03Component } from './componente-c03/componente-c03.component';
import { ComponenteC04Component } from './componente-c04/componente-c04.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponenteC01Component,
    ComponenteC02Component,
    ComponenteC03Component,
    ComponenteC04Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponenteC01Component,
    ComponenteC02Component,
    ComponenteC03Component,
    ComponenteC04Component
  ],
})
export class SeccionesModule { }
