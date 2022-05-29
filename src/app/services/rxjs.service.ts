import { Injectable } from '@angular/core';
import { filter, from, Observable, Subject, Subscriber } from 'rxjs';
import { HttpClient} from '@angular/common/http';





@Injectable({
    providedIn: 'root'
})

/*
const source = from([this.http.get('/assets/db.json')])
const datosF = source.pipe(filter(vector => vector.curso === 2));
const subscribe = example.subscribe(val => console.log(`curso 2`));
*/

export class RxjsService {
    
    datos: Array<any> = [this.http.get('/assets/db.json')];


    /*
    cursos: Array<any> = [
        
        {id: 1, nombre: "Rodolfo", apellido: "Fernandez", email: "rfernandez@gmail.com", curso: 1, turno: "mañana", profesor: "Profesor1"},
        {id: 2, nombre: "Alfonso", apellido: "Gutierrez", email: "agutierrez@gmail.com", curso: 1, turno: "mañana", profesor: "Profesor1"},
        {id: 3, nombre: "Guillermo", apellido: "Fernandez", email: "gfernancez@gmail.com", curso: 1, turno: "mañana", profesor: "Profesor1"},
        {id: 4, nombre: "Ariel", apellido: "Ramirez", email: "arielr@gmail.com", curso: 3, turno: "tarde", profesor: "Profesor2"},
        {id: 5, nombre: "Roberto", apellido: "Etchegaray", email: "roberte@gmail.com", curso: 3, turno: "tarde", profesor: "Profesor2"},
        {id: 6, nombre: "Martin", apellido: "Gonzales", email: "mgonzales@gmail.com", curso: 3, turno: "tarde", profesor: "Profesor2"},
        {id: 7, nombre: "Federico", apellido: "Valdez", email: "fvaldez@gmail.com", curso: 3, turno: "tarde", profesor: "Profesor2"},
        {id: 8, nombre: "Matias", apellido: "Ramaguffin", email: "mrama@gmail.com", curso: 6, turno: "noche", profesor: "Profesor3"},
        {id: 9, nombre: "Hugo", apellido: "Toledo", email: "htoledo@gmail.com", curso: 6, turno: "noche", profesor: "Profesor3"},
        {id: 10, nombre: "Pedro", apellido: "Castillo", email: "pcastillo@gmail.com", curso: 6, turno: "noche", profesor: "Profesor3"}        
    ];
    */
        //cursoPromise!: Promise<any>;
        //cursos$: Observable<any>;

        datoPromise!: Promise<any>;
        datos$: Observable<any>;
    
        constructor(
            private http: HttpClient
    
        ) {
            this.datos$ = new Observable((suscripcion) =>{
                if(this.datos.length > 0){
                    suscripcion.next(this.datos);
                    suscripcion.complete();
                }else{
                    suscripcion.error();
                }                                  
            });
    
    
            this.datoPromise = new Promise((resolve, reject) => {
                if(this.datos.length > 0){
                    resolve(this.datos);
                } else {
                    reject(this.datos);
                }
            });
    
            
        }
    
        obtenerCursosPromise(){
            return this.datoPromise;
        }
    
        obtenerCursosObservable(){
            return this.datos$;        
        }
        
        filtrarCurso(){
            
        }
        eliminarCurso(id: number){
            for(let i=0; i<this.datos.length; i++){
                if(this.datos[i].id == id){
                    this.datos.splice(this.datos[i], 1);
                }
            }
        }
    
        obtenerDatosObservable(): Observable<any>{
            return this.http.get('/assets/db.json');
        }
    
        modificarCurso(data: any){
            for(let i=0; i<this.datos.length; i++){
                if(this.datos[i].id == data.id){
                    this.datos[i]=data;
                }
            }
        }

    /*constructor(
        private http: HttpClient

    ) {
        this.cursos$ = new Observable((suscripcion) =>{
            if(this.cursos.length > 0){
                suscripcion.next(this.cursos);
                suscripcion.complete();
            }else{
                suscripcion.error();
            }                                  
        });


        this.cursoPromise = new Promise((resolve, reject) => {
            if(this.cursos.length > 0){
                resolve(this.cursos);
            } else {
                reject(this.cursos);
            }
        });

        
    }

    obtenerCursosPromise(){
        return this.cursoPromise;
    }

    obtenerCursosObservable(){
        return this.cursos$;        
    }

    eliminarCurso(id: number){
        for(let i=0; i<this.cursos.length; i++){
            if(this.cursos[i].id == id){
                this.cursos.splice(this.cursos[i], 1);
            }
        }
    }

    obtenerDatosObservable(): Observable<any>{
        return this.http.get('/assets/db.json');
    }

    modificarCurso(curso: any){
        for(let i=0; i<this.cursos.length; i++){
            if(this.cursos[i].id == curso.id){
                this.cursos[i]=curso;
            }
        }
    }
    */
}