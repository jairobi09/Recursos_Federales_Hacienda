<script lang="ts" setup>
import Footer from './footer/Footer.vue';
import NavPlantilla from './navbar/NavPlantilla.vue';
import SustentoNormativo from './sustentoNormativo/SustentoNormativo.vue';
import Encabezado from "../secciones/Encabezado.vue";

</script>
<template>
    <section class="flex flex-col min-h-dvh">
        <NavPlantilla/>
        <Encabezado/>

        <main class="flex-1 px-3 lg:px-[8dvw] py-6">
            <slot/>
        </main>
        <SustentoNormativo/>
        <Footer/>
    </section>

</template>
<style scoped>
</style>