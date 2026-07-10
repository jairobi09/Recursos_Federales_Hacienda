<script setup lang="ts">
import { TypeListaItem } from '../../secciones/interfaces/intTabs.ts';

const props = defineProps<{
  listaItem: TypeListaItem
  expandido: boolean
  handleExpandir: (expandir: number) => void
}>()
const manejarExpandir = (expandir: number) => {
  if (props.listaItem.detalle) {
    props.handleExpandir(expandir)
  }
}
//@ts-ignore
const imagen = props.listaItem.img ? `${import.meta.env.BASE_URL}${props.listaItem.img}` : false
</script>
<template>
  <section class="acordion-contenedor">
    <div
      class="acordion-encabezado"
      :class="listaItem.detalle ? 'mostrar-expandir' : ''"
      @click="manejarExpandir(props.listaItem.id)"
    >
      <div v-if="props.listaItem.titulo" class="titulo  hyphens-auto">
        <h5>
          <strong>{{ props.listaItem.titulo }}</strong>
        </h5>
        <img v-if="imagen" :src="imagen" class="imagen-acordion" />
      </div>
      <div class="flex flex-col relative">
        <div class="acordion-detalle">
          {{ props.listaItem.descripcion }}

        </div>
        <div v-if="props.listaItem.nacional" class="acordion-detalle">
          <div style="padding-top: 1rem" />
          {{ props.listaItem.nacional }}

        </div>
      </div>
    </div>
    <div class="detalle-expansion" :class="props.expandido ? 'mostrar-detalle' : ''">
      <ul>
        <li v-for="detalle in props.listaItem.detalle" :key="detalle.descripcion">
          {{ detalle.descripcion }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.acordion-encabezado {
  display: flex;
  gap: 1rem;
  background-color: var(--color-acordion);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  align-items: center;
}

.acordion-encabezado .acordion-detalle {
  color: var(--color-texto);
  font-size: 1rem;
  flex: 1;
}
.acordion-encabezado.mostrar-expandir {
  cursor: pointer;
}
.acordion-encabezado.mostrar-expandir .acordion-detalle::after {
  content: '+';
  position: absolute;
  top: calc(50% - 1rem);
  right: -3rem;
  font-size: 2rem;
  background-color: var(--color-activo);
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25rem;
}
.acordion-detalle {
  position: relative;
  margin: 0;
}
.detalle-expansion {
  padding: 0 2rem;
  transition:
    opacity 0.1s ease,
    max-height 0.4s ease;
  opacity: 0;
  max-height: 0;
}
.detalle-expansion.mostrar-detalle {
  opacity: 1;
  max-height: 10rem;
  padding: 1rem 2rem;
}
.acordion-encabezado .titulo{
  min-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

}
.titulo h5{
  width: 100%;
}
@media (max-width: 1024px) {
  .acordion-encabezado {
    flex-direction: column;
  }
  .acordion-encabezado .titulo {
    width: 100%;
    min-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .imagen-acordion {
    margin-top: 0 !important;
  }
}
.acordion-contenedor {
  color: var(--color-texto);
}
.imagen-acordion {
  margin-top: 1rem;
  width: 5rem !important;
  min-width: 5rem !important;
}
</style>
