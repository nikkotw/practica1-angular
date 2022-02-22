import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { ListadoComponent } from '../components/listado/listado.component';


const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:FooterComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'listado',
    component:ListadoComponent
  }
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
