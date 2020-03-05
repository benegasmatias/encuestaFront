import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestasFormComponent } from './components/encuestas-form/encuestas-form.component';
import {HttpClientModule} from '@angular/common/http';
import { CreaEncuestaComponent } from './components/crea-encuesta/crea-encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    EncuestasFormComponent,
    CreaEncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
