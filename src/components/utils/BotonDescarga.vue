<script lang="ts" setup>
import { IntBoton } from '../secciones/interfaces/intInformacionGeneral.ts';
import IconoArchivo from './IconoArchivo.vue';
interface IntBotones{
    boton:IntBoton
}

const props = defineProps<IntBotones>()
</script>
<template>
    <a :href="boton.url" target="_blank" class="boton-descarga shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out" >
        <IconoArchivo :extension="boton.tipo"/>
        <span class="flex items-center" v-html="boton.descripcion"></span>
    </a>
</template>
<style scoped>
.boton-descarga{
    display: flex;
    border-radius: 999px;
    align-items: stretch;
    padding-right: 0.5rem;
    overflow: hidden;
    gap: 1rem;
    font-size:0.8rem;
}
/* Ícono SVG incrustado en cada botón */
.dt-dl-icon {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
}

/* ── xlsx: verde esmeralda ── hojas de cálculo ──────────────── */
.dt-dl-btn--xlsx {
  background: rgb(42 170 85);
  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.25);
}

/* ── csv: azul océano ── datos tabulares ────────────────────── */
.dt-dl-btn--csv {
  background: rgb(1, 86, 253);
  box-shadow: 0 1px 3px rgba(3, 105, 161, 0.25);
}

/* ── zip: ámbar dorado ── archivo comprimido ────────────────── */
.dt-dl-btn--zip {
  background: rgb(83 88 255);
  box-shadow: 0 1px 3px rgba(83, 88, 255, 0.25);
}
</style>