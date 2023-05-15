import { Component } from '@angular/core';
import { ASIGNATURAS, asignatura} from 'src/app/asignaturas';



@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent {
  asignaturas: asignatura [] = ASIGNATURAS;

}
