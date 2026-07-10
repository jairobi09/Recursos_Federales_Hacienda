<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { fetchPublicJson } from '../utils/utils.ts';

import { IntCapacitacion } from './interfaces/intTabs.ts';
import Tabs from '../utils/Tabs/Tabs.vue';
import CardVideoYT from '../utils/CardVideoYT.vue';

const datos = ref<IntCapacitacion | null>(null)

onMounted(async () => {
    datos.value = await fetchPublicJson("/secciones/tabs.json");

})
const videoWebinar = {
    "url": "https://www.youtube.com/playlist?list=PL70v4ugUBnBQNsfkHk5ivsISq3dQAY3xk",
    "titulo": "Consulta todos los Webinars realizados",
    "botones":[{
        "url":"https://www.youtube.com/playlist?list=PL70v4ugUBnBQNsfkHk5ivsISq3dQAY3xk",
        "descripcion":"Consulta",
        "tipo":"url"
    }]
}
</script>

<template>
    <main class="flex flex-col w-full items-center" :style="{
        '--color-fondo-seccion': datos?.fondoSeccion,
        '--color-texto-seccion': datos?.textoSeccion,
        '--color-activo': datos?.colorActivo,
        '--color-acordion': datos?.fondoCard,
        '--color-texto': datos?.textoCard,
        '--color-encabezado': datos?.colorEncabezado,
    }">
        <h2 class="text-[#ec7537] text-center pt-12">Consulta la información por módulo</h2>
        <div class="my-12">
            <CardVideoYT :video="videoWebinar"/>
        </div>
        <h5>Te invitamos a consultar los tutoriales.
            Da clic en la sección sobre la que necesites información.</h5>

        <div class="w-full seccion-tabs relative mt-6" v-if="datos" v-show="datos.tabs.length > 0">
            <Tabs v-show="datos.tabs.length > 0" :datos="datos" />
        </div>
    </main>
</template>
<style scoped></style>