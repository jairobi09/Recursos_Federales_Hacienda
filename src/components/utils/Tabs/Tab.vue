<script setup lang="ts">
import { IntTab } from '../../secciones/interfaces/intTabs.ts';
import CardVideoYT from '../CardVideoYT.vue';
import CardGuia from '../CardGuia.vue';
import { getCardClass } from '../utils.ts';

const props = defineProps<{
  tab: IntTab
}>()



</script>
<template>
  <section class="tabs-contenedor" :style="{ '--color-card': 'var(--color-activo, #04878c)' }">
    <h3 class="text-center text-[var(--color-card)] " v-html="tab.titulo"></h3>
    <p class="mb-12 text-justify" v-html="tab.descripcion"></p>
    <div v-if="tab.videos" class="grid grid-cols-6 gap-4 mb-12">
      <div :class="getCardClass(tab?.videos.length,idx,3)" v-for="(video, idx) in tab?.videos" :key="video.url">
        <CardVideoYT :video="video" />
      </div>
    </div>
    <div v-if="tab.guias" class="grid grid-cols-6 gap-4 mb-12">
      <h4 class="col-span-full text-center text-[var(--color-card)] ">{{ tab.id === 3 ?'Consulta las guías de apoyo' :'Consulta las guías de usuario' }}</h4>
      <div :class="getCardClass(tab?.guias.length,idx,3)" v-for="(guia, idx) in tab?.guias" :key="guia.url">
        <CardGuia :guia="guia" />
      </div>
    </div>
    <div v-if="tab.matices" class="grid grid-cols-6 gap-4 mb-12">
      <div class="col-span-full pb-4">
        <h4 class="text-center text-[var(--color-card)] " v-html="tab.tituloMatices" v-if="tab.tituloMatices"></h4>
        <p style="text-align: center;" v-html="tab.descripcionMatices" v-if="tab.descripcionMatices"></p>

      </div>
      <div :class="getCardClass(tab?.matices.length,idx,3)" v-for="(matiz, idx) in tab?.matices" :key="matiz.url">
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
