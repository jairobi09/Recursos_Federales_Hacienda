export interface IntInformacionGeneral {
  presentacion: IntSeccion;
  recursos: IntSeccion;
}

export interface IntSeccion {
  videos: IntVideo[];
  guias?: IntGuia[];
}

export interface IntVideo {
  url: string;
  titulo?: string | null;
  botones?: IntBoton[];
}

export interface IntBoton {
  descripcion: string;
  url: string;
  tipo: string;
}

export interface IntGuia {
  id: number;
  titulo: string;
  descripcion: string | null;
  url: string;
  tipo: string;
}