import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../interface/api.modelo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 uri:string = "https://gorest.co.in/public/v2/users" // De Vestidos !!  PROVEEDOR!!  

  constructor(private http:HttpClient) { }
  bonito:any[]= []; // CAJA NUEVA DONDE VAMOS A ENIVARLE A DANI EL MAS BONITO! 
   
  getUser(){
    return this.http.get(this.uri);
  }

  ElMasBonitdo(){ // NECESITO EL MAS BONITO  - ESTO ES LO Q PIDE DANIELA!!! SUPER EXIGENTE!
    this.http.get(this.uri).subscribe((res:any)=>{
       res.foreach((item:any)=>{
         if(item.name == "mas bonito"){
           this.bonito.push(item);
         }
       });
       return this.bonito;
    });    
  }

  EnviarVestido(paquete:Api){
    return this.http.post(this.uri,paquete)
  }

}
