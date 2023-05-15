import { Component } from '@angular/core';
import { USUARIOS, usuario } from 'src/app/usuarios';
import { ASIGNATURAS, asignatura} from 'src/app/asignaturas';

@Component({
  selector: 'app-back-notas',
  templateUrl: './back-notas.component.html',
  styleUrls: ['./back-notas.component.css']
})
export class BackNotasComponent {
  usuarios: usuario[] = USUARIOS;
  asignaturas: asignatura [] = ASIGNATURAS;

}
