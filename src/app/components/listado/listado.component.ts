import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user.modelo';
import { ApiService } from 'src/app/services/api.service';
import { Api } from 'src/app/interface/api.modelo';
import { nextTick } from 'process';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  users:User[]=[];
  arreglo:[]=[];

  vestido:Api = { 
  name:'pedro',
  email:'pedro1@pedrito.com',
  gender:'male',
  status:'active'} as Api

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  //  this.apiService.getUser().subscribe((res:any)=>{
  //     this.arreglo = res;
  //     console.log(this.arreglo)
  //  })
    this.apiService.EnviarVestido(this.vestido).subscribe((res:any)=>{
      console.log(res);
    )};

}
