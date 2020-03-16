import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasFormComponent } from './components/encuestas-form/encuestas-form.component';
import { CreaEncuestaComponent } from './components/crea-encuesta/crea-encuesta.component';


const routes: Routes = [
  {
    path: "",
    component:CreaEncuestaComponent
  },
  {
    path: "vistaEncuesta",
    component:EncuestasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [CreaEncuestaComponent]
})
export class AppRoutingModule { }
