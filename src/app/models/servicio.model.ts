export interface IServices {
    usuario_id: number;
    usuario_nombre: string;
    usuario_apellido: string;
    usuario_correo: string;
    usuario_ultConec: string;
    usuario_foto: string;
    usuario_rol: number;
    servicios_usuario: number;
    servicios_nombre: string;
    servicios_matricula: number;
    datos_id: number;
    datos_telefono: number;
    datos_pais: number;
    datos_provincia: number;
    datos_localidad: number;
    datos_calle: string;
    datos_gps: string;
    datos_disponibilidad: string;
    datos_descripcion: string;
    datos_calificacion: number;
    datos_fotos: DatosFoto[];
}

export interface DatosFoto {
    url: string;
}