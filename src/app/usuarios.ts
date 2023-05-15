export interface usuario {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  usuario: string;
  password: string;
  foto: string;
  direccion: string;
  telefono: number;
  tipo_usuario: string;
  activo: boolean;
}




export const USUARIOS: usuario[] = [
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


  
];
