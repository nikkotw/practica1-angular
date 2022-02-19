import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'contenido-com',
    templateUrl:'./contenido.component.html',
    styleUrls: ['./contenido.component.css']
})

export class contenidoComponent{
    formulario = this.nuevoFormualario.group({
        nombre:'',
        apellido:'',
        email:'',
        telefono:''
    });

    usuarios:any=[];

    constructor(private nuevoFormualario:FormBuilder){
    }


    CHILLSAVE(){

            // this.user.nombre = this.formulario.get('nombre')?.value;
            // this.user.apellido = this.formulario.get('apellido')?.value;
            // this.user.email = this.formulario.get('email')?.value;
            // this.user.telefono = this.formulario.get('telefono')?.value;

            this.usuarios.push(this.nuevoFormualario.control);//PONER EN ARRAY
            //console.log(this.user)

            console.log(this.usuarios);
            ///this.limpiarForm();
    }


    limpiarForm(){
            this.formulario.reset()
        }

}