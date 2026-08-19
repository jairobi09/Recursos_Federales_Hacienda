<script lang="ts" setup>
import { IntVideo } from '../secciones/interfaces/intInformacionGeneral.ts';
import BotonDescarga from './BotonDescarga.vue';
import FrameVideoYT from './FrameVideoYT.vue';
interface IntProps {
    video: IntVideo
}
const props = defineProps<IntProps>();
</script>
<template>
    <div class="rounded-3xl card-video shadow-xl border border-[#e2e8f0] hover:border-[var(--color-card)]"
     :style="{ '--color-card': 'var(--color-activo, #04878c)'}"
        >
        <div v-if="video.url" class="contenedor-video rounded-lg">
            <FrameVideoYT :url="video.url" />
        </div>
        <h4 class="text-[var(--color-card)]" :class="{
            'flex-1':!video.descripcion
        }" v-if="video.titulo" v-html="video.titulo"></h4>
        <p class="flex-1 text-sm" v-if="video.descripcion" v-html="video.descripcion"></p>
        <div class="flex flex-wrap items-center justify-end gap-4">
            <BotonDescarga v-if="video.botones" v-for="boton in video.botones" :key="boton.url" :boton="boton" />
        </div>
    </div>
</template>
<style scoped>
.card-video {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 1rem;
}

.contenedor-video {
    aspect-ratio: 16/9;
    overflow: hidden;
}
</style>