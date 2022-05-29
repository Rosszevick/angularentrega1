import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RxjsService } from '../../services/rxjs.service';
import { CursoDialogComponent } from '../curso-dialog/curso-dialog.component';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  //cursos: any[] = [];
  //cursosPromise!: Promise<any>;
  datos: any[] = [];
  datos$!: Observable<any>;
  datosSuscripcion!: any;

  constructor(
    public dialog: MatDialog,
    private RxjsService: RxjsService
  ) {}

  ngOnInit(): void {
    //CON PROMESA
    /*
    this.cursosPromise = this.RxjsService.obtenerCursosPromise();
    this.cursosPromise
      .then((cursos) => {
        this.cursos=cursos;
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        console.log("ejecucion independiente");
      });
    */
    //CON OBSERVABLE
    /*
      this.RxjsService.obtenerCursosObservable().subscribe({
        next: (cursos)=>{
          this.cursos = cursos;
        },
        error: (error) => {
          console.error("Ocurrio un error", error);
        }
      });      

      //this.RxjsService.obtenerDatosObservable().subscribe((datos) =>{
      //  this.datos = datos;
      this.datos$ = this.RxjsService.obtenerDatosObservable();
      this.datos$.subscribe((datos) =>{
        this.datos = datos;
      }); 
    */      
      
      //CON OBSERVABLE +JASON
      this.RxjsService.obtenerCursosObservable().subscribe({
        next: (datos)=>{
          this.datos = datos;
        },
        error: (error) => {
          console.error("Ocurrio un error", error);
        }
      });      

      this.datos$ = this.RxjsService.obtenerDatosObservable();
      this.datosSuscripcion = this.datos$.subscribe((datos) =>{
        this.datos = datos;
      });   


  }

  eliminarCurso(id: number){
    this.RxjsService.eliminarCurso(id);
  }

  abrirCursoDialog(dato: any){
    const dialogRef = this.dialog.open(CursoDialogComponent, {
      width: '500px',
      data: dato
    });

    dialogRef.afterClosed().subscribe((data)=>{
      console.log(data);
      alert("registro modificado");
    })
  }

  filtrarCurso(){
    this.RxjsService.filtrarCurso();
  }
  
  ngOnDestroy(): void {
    this.datosSuscripcion.unsubscribe();
  }
}
