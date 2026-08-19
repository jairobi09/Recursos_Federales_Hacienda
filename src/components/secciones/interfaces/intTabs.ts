import { IntVideo } from "./intInformacionGeneral";

export interface IntCapacitacion {
  tabs: IntTab[];
}

export interface IntTab {
  id: number;
  titulo: string;
  icono:string;
  descripcion: string;
  videos: IntVideo[];
  webinars: IntVideo[];
  guias?: IntRecurso[];
  matices?: IntRecurso[];
  colorActivo: string;
  tituloMatices?:string;
  descripcionMatices?:string;
}

export interface IntRecurso {
  id: number;
  titulo: string;
  descripcion: string | null;
  url: string;
  tipo: string;
}
