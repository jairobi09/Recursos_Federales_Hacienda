<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { IntInformacionGeneral } from "./interfaces/intInformacionGeneral.ts";
import { fetchPublicJson } from "../utils/utils.ts";
import CardVideoYT from "../utils/CardVideoYT.vue";
import CardGuia from "../utils/CardGuia.vue";

const infoGeneral = ref<IntInformacionGeneral | null>(null);
onMounted(async () => {
  infoGeneral.value = await fetchPublicJson(
    "/secciones/informacionGeneral.json",
  );
});
</script>

<template>
  <main class="flex flex-col w-full items-center">
    <h2 class="text-[#ec7537] text-center pt-12">Información general</h2>
    <p class="pt-6">
      En esta sección encontrarás videos tutoriales, manuales y guías de
      consulta diseñados para facilitar el uso del Sistema de Reporte de
      Recursos Federales Transferidos (SRFT). Cada video explica, de manera
      práctica y paso a paso, las principales funcionalidades, procesos y
      herramientas disponibles en dicho sistema de información, con el propósito
      de apoyar a las personas usuarias en el correcto registro y gestión de la
      información.
    </p>
    <div class="w-full grid grid-cols-2 gap-4 mt-6">
      <section
        class="flex flex-col gap-4 col-start-1 col-span-2 lg:col-start-1 lg:col-span-1 p-6 border-[#d1d1d1] border-b-1 lg:border-b-0 border-r-0 lg:border-r-1"
      >
        <div v-if="infoGeneral?.presentacion.videos" class="flex-1">
          <CardVideoYT
            v-for="video in infoGeneral?.presentacion.videos"
            :key="video.url"
            :video="video"
          />
        </div>
        <div
          class="grid grid-cols-2 gap-4"
          v-if="infoGeneral?.presentacion.guias"
        >
          <div
            class="col-span-full lg:col-span-1"
            v-for="guia in infoGeneral?.presentacion.guias"
            :key="guia.id"
          >
            <CardGuia :guia="guia" />
          </div>
        </div>
      </section>
      <section
        class="p-6 col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 flex flex-col gap-4"
      >
        <div class="flex-1 flex flex-col gap-2">
          <p>
            El SRFT es el sistema de información que establece el artículo 85,
            fracción II, primer párrafo de la Ley Federal de Presupuesto y
            Responsabilidad Hacendaria, y que la Secretaría de Hacienda y
            Crédito Público, por conducto de la Unidad de Política y Estrategia
            para Resultados, pone a disposición de las entidades federativas,
            los municipios y las demarcaciones territoriales de la Ciudad de
            México para cumpli con su obligación de reportar trimestral y
            anualmente el destino, ejercicio y resultados de los recursos
            federales transferidos. Para garantizar el cumplimiento de las
            obligaciones en materia del reporte, el SRFT se compone de cuatro
            módulos: Destino del Gasto, Ejercicio del Gasto, Indicadores y
            Evaluaciones. * Te sugerimos consultar todos los materiales antes de
            trabajar en cada módulo; en ellos encontrarás ejemplos prácticos y
            recomendaciones clave para optimizar el uso de las herramientas del
            sistema.
          </p>
          <span class="text-xs"
            >* El módulo Evaluaciones se encuentra en construcción. Las
            evaluaciones a Fondos de Aportaciones Federales y programas de
            recursos federales transferidos en el ámbito subnacional se reportan
            en el Sistema de Formato Único (SFU).</span
          >
        </div>
        <div class="grid grid-cols-2 gap-4" v-if="infoGeneral?.recursos.videos">
          <div
            class="col-span-full lg:col-span-1"
            v-for="video in infoGeneral?.recursos.videos"
            :key="video.url"
          >
            <CardVideoYT :video="video"></CardVideoYT>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<style scoped></style>
