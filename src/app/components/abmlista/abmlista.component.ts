import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-abmlista',
  templateUrl: './abmlista.component.html',
  styleUrls: ['./abmlista.component.scss']
})
export class AbmlistaComponent implements OnInit {

  formularioContacto: FormGroup= new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.nullValidator] ) ,
    apellido: new FormControl('', [Validators.required, Validators.nullValidator] ) ,
    email:new FormControl('', [Validators.required, Validators.email]) ,
    curso: new FormControl('', [Validators.required, Validators.nullValidator] ) ,
    turno: new FormControl('', [Validators.required, Validators.nullValidator] ) ,
    profesor: new FormControl('', [Validators.required, Validators.nullValidator] )
  });
  

  submit(){
    console.log(this.formularioContacto);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
