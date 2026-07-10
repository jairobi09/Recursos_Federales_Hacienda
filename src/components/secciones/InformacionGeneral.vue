<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IntInformacionGeneral } from './interfaces/intInformacionGeneral.ts';
import { fetchPublicJson } from '../utils/utils.ts';
import CardVideoYT from '../utils/CardVideoYT.vue';
import CardGuia from '../utils/CardGuia.vue';

const infoGeneral = ref<IntInformacionGeneral | null>(null);
onMounted(async () => {
    infoGeneral.value = await fetchPublicJson("/secciones/informacionGeneral.json");
})
</script>

<template>
    <main class="flex flex-col w-full items-center">
        <h2 class="text-[#ec7537] text-center pt-12">Información general</h2>
        <p class="pt-6">En esta sección encontrarás la serie de tutoriales así como las guías de consulta que te
            permitirán conocer el funcionamiento del nuevo Sistema de Reporte de Recursos Federales Transferidos (SRFT).
        </p>
        <div class="w-full grid grid-cols-2 gap-4 mt-6">
            <section
                class=" flex flex-col gap-4 col-start-1 col-span-2 lg:col-start-1 lg:col-span-1 p-6 border-[#d1d1d1] border-b-1 lg:border-b-0 border-r-0 lg:border-r-1 ">
                <div v-if="infoGeneral?.presentacion.videos" class="flex-1">
                    <CardVideoYT v-for="video in infoGeneral?.presentacion.videos" :key="video.url" :video="video"/>
                </div>
                <div class="grid grid-cols-2 gap-4 " v-if="infoGeneral?.presentacion.guias">
                    <div class="col-span-full lg:col-span-1" v-for="guia in infoGeneral?.presentacion.guias"
                        :key="guia.id">
                        <CardGuia :guia="guia"/>
                    </div>
                </div>
            </section>
            <section class="p-6 col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 flex flex-col gap-4">
                <div class="flex-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a velit mauris. Suspendisse
                        tristique tellus eget velit scelerisque, vel tincidunt dolor tempor. Etiam condimentum, nulla id
                        cursus dapibus, leo libero hendrerit elit, id maximus metus metus vitae felis. Sed id erat eu
                        est vestibulum aliquam ut non lectus. Suspendisse id neque sit amet urna auctor efficitur eu
                        quis lorem. Morbi ut libero id elit sagittis tristique vitae quis ipsum. Ut vel facilisis diam,
                        a auctor massa. Vestibulum malesuada tristique blandit. Duis et enim a velit feugiat posuere.
                        Curabitur commodo tristique mi ut tincidunt. Duis lacinia tempus est a tristique. Nam consequat
                        vulputate ligula. Ut pharetra metus fringilla velit placerat, vitae porttitor dolor posuere.
                        Phasellus vitae egestas dolor.
                    
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 " v-if="infoGeneral?.recursos.videos">
                    <div class="col-span-full lg:col-span-1" v-for="video in infoGeneral?.recursos.videos"
                        :key="video.url">
                        <CardVideoYT :video="video"></CardVideoYT>
                    </div>
                </div>

            </section>
        </div>
    </main>
</template>
<style scoped></style>