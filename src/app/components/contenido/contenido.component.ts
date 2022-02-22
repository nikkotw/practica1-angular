import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interface/user.modelo'; // IMPORTAMOS INTERFACE!! 
import { UserService } from 'src/app/services/user.service';

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

  
    usuarios:User[]=[];
    constructor(private nuevoFormualario:FormBuilder,private UserService:UserService){
    }


    CHILLSAVE(){

            let nuevoUser : User = {
                nombre :this.formulario.get('nombre')?.value,
                apellido:this.formulario.get('apellido')?.value,
                email:this.formulario.get('email')?.value,
                telefono:this.formulario.get('telefono')?.value, 
            }
            this.UserService.addUser(nuevoUser);

            console.log(this.usuarios);
            this.limpiarForm();
    }


    limpiarForm(){
            this.formulario.reset()
        }

}