import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaComponent } from './components/lista/lista.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbmlistaComponent } from './components/abmlista/abmlista.component';
import { RxjsService } from './services/rxjs.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from'@angular/material/card';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    ToolbarComponent,
    AbmlistaComponent,
    CursoDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule, 
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [
    RxjsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
