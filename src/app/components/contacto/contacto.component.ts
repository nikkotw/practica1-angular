import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    asunto:'',
    descrpcion:'',
  });

  nombre = '';
  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre = this.checkoutForm.get('name')?.value
  }
}
