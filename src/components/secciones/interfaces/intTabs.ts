import { IntVideo } from "./intInformacionGeneral";

export interface IntCapacitacion {
  colorActivo: string;
  colorEncabezado: string;
  textoCard: string;
  fondoCard: string;
  fondoSeccion: string;
  textoSeccion: string;
  tabs: IntTab[];
}

export interface IntTab {
  id: number;
  titulo: string;
  videos: IntVideo[];
  webinars:IntVideo[];
  guias?: IntRecurso[];
  matices?: IntRecurso[];
}



export interface IntRecurso {
  id: number;
  titulo: string;
  descripcion: string | null;
  url: string;
  tipo: string;
}