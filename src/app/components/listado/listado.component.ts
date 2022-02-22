import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user.modelo';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  users:User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    console.log(this.users);
  }

}
