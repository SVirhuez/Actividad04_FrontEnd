import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent} from './components/add-alumno/add-alumno.component';

const routes: Routes = [
  {path:"addAlumno", component:AddAlumnoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
