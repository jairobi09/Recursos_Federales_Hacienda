<script setup lang="ts">
import { IntTab } from '../../secciones/interfaces/intTabs.ts';
import CardVideoYT from '../CardVideoYT.vue';
import CardGuia from '../CardGuia.vue';

const props = defineProps<{
  tab: IntTab
}>()



</script>
<template>
  <section class="tabs-contenedor" :style="{ '--color-card': 'var(--color-activo, #04878c)' }">
    <h3 class="text-center text-[var(--color-card)] " v-html="tab.titulo"></h3>
    <p class="mb-12 text-justify" v-html="tab.descripcion"></p>
    <div v-if="tab.videos" class="grid grid-cols-3 gap-4 mb-12">
      <div class="col-span-full lg:col-span-1" v-for="video in tab?.videos" :key="video.url">
        <CardVideoYT :video="video" />
      </div>
    </div>
    <div v-if="tab.guias" class="grid grid-cols-3 gap-4 mb-12">
      <h4 class="col-span-full text-center text-[var(--color-card)] ">Consulta las guías de apoyo</h4>
      <div class="col-span-full lg:col-span-1" v-for="guia in tab?.guias" :key="guia.url">
        <CardGuia :guia="guia" />
      </div>
    </div>
    <div v-if="tab.matices" class="grid grid-cols-3 gap-4 mb-12">
      <div class="col-span-full pb-4">
        <h4 class="text-center text-[var(--color-card)] " v-html="tab.tituloMatices" v-if="tab.tituloMatices"></h4>
        <p style="text-align: center;" v-html="tab.descripcionMatices" v-if="tab.descripcionMatices"></p>

      </div>
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
