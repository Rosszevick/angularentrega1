import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxjsService } from '../../services/rxjs.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private RxjsService: RxjsService
  ) { 
    this.formulario = this.fb.group({
      nombre: new FormControl(data.nombre),
      curso: new FormControl(data.curso)
    });
  }

  ngOnInit(): void {
  }

  actualizarCurso(){
    let data: any= {
      id: this.data.id,
      nombre: this.formulario.value.nombre,
      curso: this.formulario.value.curso
    };
    this.RxjsService.modificarCurso(data);
    this.dialogRef.close("Mensaje");
  }
}
