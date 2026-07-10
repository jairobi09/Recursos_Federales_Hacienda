<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Acordion from './Acordion.vue'
import { IntTab } from '../../secciones/interfaces/intTabs.ts';
import CardVideoYT from '../CardVideoYT.vue';
import CardGuia from '../CardGuia.vue';

const props = defineProps<{
  tab: IntTab
}>()

const expandido = ref<number | null>(null);
const handleExpandir = (expandir: number): void => {

  if (expandido.value === expandir) {
    expandido.value = null;
  }
  else {
    expandido.value = expandir;
  }
  console.log(expandido.value);

}
onMounted(() => {
  expandido.value = null;
})
onUnmounted(() => {
  expandido.value = null;
})
</script>
<template>
  <section class="tabs-contenedor">
    <h3 class="text-center text-[#04878c] mb-12" v-html="tab.titulo"></h3>
    <div v-if="tab.videos" class="grid grid-cols-3 gap-4 mb-12">
      <div  class="col-span-full lg:col-span-1" v-for="video in tab?.videos" :key="video.url">
        <CardVideoYT :video="video" />
      </div>
    </div>
    <div v-if="tab.guias" class="grid grid-cols-3 gap-4 mb-12">
      <div class="col-span-full lg:col-span-1" v-for="guia in tab?.guias" :key="guia.url">
        <CardGuia :guia="guia" />
      </div>
    </div>
    <div v-if="tab.matices" class="grid grid-cols-3 gap-4 mb-12">
      <div class="col-span-full lg:col-span-1" v-for="matiz in tab?.matices" :key="matiz.url">
        <CardGuia :guia="matiz" />
      </div>
    </div>
     <div v-if="tab.webinars" class="grid grid-cols-3 gap-4 mb-12">
      <div class="col-span-full lg:col-span-1" v-for="web in tab?.webinars" :key="web.url">
         <CardVideoYT :video="web" />
      </div>
    </div>
  </section>
</template>
<style>
@import './Tabs.css';
</style>
