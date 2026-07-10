<script lang="ts" setup>
import { IntGuia } from '../secciones/interfaces/intInformacionGeneral.ts';
import BotonDescarga from './BotonDescarga.vue';
import FrameVideoYT from './FrameVideoYT.vue';
interface IntProps {
    guia:IntGuia
}
const props = defineProps<IntProps>();
</script>
<template>
    <div class="rounded-3xl card-guia shadow-xl border border-[#e2e8f0] hover:border-[#04878c]">

        <h4 class="flex-1 text-[#04878c]" v-if="guia.titulo" v-html="guia.titulo"></h4>
        <p v-if="guia.descripcion" v-html="guia.descripcion"></p>
        <div class="flex flex-wrap items-center justify-end gap-4">
            <BotonDescarga :boton="{
                url:guia.url,
                descripcion:'Consultar',
                tipo:guia.tipo
            }"/>
        </div>
    </div>
</template>
<style scoped>
.card-guia{
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 1rem;
}

</style>