import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuariosDb = [
      { id: 1,
        nombre: 'Jose',
        apellidos:"Cortes Gimenez",
        usuario:"jcortesg",
        dni:"22222222a",
        password:"ninguna",
        foto:"png1",
        direccion:"Calle Desengaño 21",
        telefono:666666666,
        tipo_usuario:"alumno",
        activo:true 
      },
    
      { id: 2,
        nombre: 'Adrian',
        apellidos:"Sanchez",
        usuario:"asanchez",
        dni:"22222222b",
        password:"ninguna",
        foto:"png1",
        direccion:"Calle del Rio Segura 2",
        telefono:654567988,
        tipo_usuario:"alumno",
        activo:true 
      },
    
     {id: 3,
        nombre: 'Maria Cristina',
        apellidos:"Bagan",
        usuario:"asanchez",
        dni:"22222222c",
        password:"ninguna",
        foto:"png1",
        direccion:"Calle de la Desercion 3",
        telefono:666666667,
        tipo_usuario:"alumno",
        activo:true 
      },
    
      { id: 4,
        nombre: 'Victoria',
        apellidos:"Centenelles",
        usuario:"vcentenelles",
        dni:"22222222x",
        password:"ninguna",
        foto:"png1",
        direccion:"Calle de la Desercion 3",
        telefono:666666667,
        tipo_usuario:"alumno",
        activo:true 
      },
    ]
    
    return {usuariosDb};
  }

  genId(usuariosDb: usuario[]): number {
    return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11;
  }
}