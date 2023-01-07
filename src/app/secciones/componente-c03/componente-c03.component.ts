import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-c03',
  templateUrl: './componente-c03.component.html',
  styleUrls: ['./componente-c03.component.css']
})
export class ComponenteC03Component {

   // Crear el array de datos -> almacena informacion
   datos = new Array;
   // Los datos para el array
   tarea ="";
   descripcion ="";

   //Metodo para Añadir valores al array
   Agregar(){
     if(this.tarea!=''){
       this.datos.push({'tarea': this.tarea, 'descripcion': this.descripcion});
       this.tarea = "";
       this.descripcion = "";
     }else{
       console.log("Debe ingresar nombre");
     }
   }

   botonDeshabilitado = true;

   constructor() {}

   actualizarBoton(){
    this.botonDeshabilitado = this.tarea === '' || this.descripcion === '';
   }
}
