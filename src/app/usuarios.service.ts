import { Injectable } from '@angular/core';
import { usuario } from './usuarios';
//import { USUARIOS } from './usuarios-mock';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './mensaje.service';
import { Observable, of } from 'rxjs';
import { USUARIOS } from './listaUsuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuariosUrl = 'api/usuarios';
  private log(message: string) {
    this.messageService.add(`UsuariosService : ${message}`);
  }

  getUSUARIOS(): Observable<usuario[]> {
    //Cambiamos la llamada de la lista de usuarios local por la llamada HTTP




    this.messageService.add('Servicio de Usuarios: Usuarios recuperados');
    return this.http.get<usuario[]>(this.usuariosUrl);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
