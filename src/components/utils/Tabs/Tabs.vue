<script setup lang="ts">
import { ref } from 'vue'
import Tab from './Tab.vue'
import { IntCapacitacion } from '../../secciones/interfaces/intTabs.ts';
import IconoTabs from '../IconoTabs.vue';

const props = defineProps<{
  datos: IntCapacitacion
}>()
const activo = ref<number>(0)
const handleActivo = (tab: number): void => {
  activo.value = tab
}
</script>
<template>
  <section class="seccion-tabs">
    <ul class="tabs-desemp">
      <li v-for="tab in props.datos.tabs" :key="tab.id" class="tab-desemp-item"
        :class="activo === tab.id ? 'activo' : ''" @click="handleActivo(tab.id)" :style="{
          '--color-activo': tab?.colorActivo,
          '--color-card': 'var(--color-activo, #04878c)'
        }"
        
        >
        <IconoTabs :icono="tab.icono" /> {{ tab.titulo }}
      </li>
    </ul>
    <div v-for="tab in props.datos.tabs" :key="tab.id" :style="{
      '--color-activo': tab?.colorActivo
    }">
      <Tab v-if="activo === tab.id" :tab="tab" />
    </div>
  </section>
</template>
<style scoped>
:root {
  --color-gris: #4f5071;
}

.tabs-desemp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.tab-desemp-item {
  flex: 1 1 12rem;
  padding: 1rem;
  border-bottom: 3px solid var(--color-gris);
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  cursor: pointer;
}

.tab-desemp-item svg {
  font-size: 1.8rem;
}

.tab-desemp-item.activo, .tab-desemp-item:hover {
  border-color: var(--color-card);
  color: var(--color-card);
}

.tabs-contenedor {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (max-width: 1024px) {
  .tabs-contenedor {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
</style>
