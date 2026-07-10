<script setup>
import MainLayout from './components/layout/MainLayout.vue';
import Contacto from './components/secciones/Contacto.vue';
import InformacionGeneral from './components/secciones/InformacionGeneral.vue';
import InformacionModulo from './components/secciones/InformacionModulo.vue';


</script>

<template>
  <MainLayout>
    <InformacionGeneral/>
    <InformacionModulo/>
    <Contacto/>
  </MainLayout>
</template>
