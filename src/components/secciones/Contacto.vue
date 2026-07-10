<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { IntContacto } from './interfaces/intContacto';
import { fetchPublicJson } from '../utils/utils';
import CardGuia from '../utils/CardGuia.vue';

const contacto = ref<IntContacto | null>(null);
onMounted(async () => {
    contacto.value = await fetchPublicJson("/secciones/contacto.json");
})
function unirConComasYO(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} o ${items[1]}`;

  return `${items.slice(0, -1).join(", ")} o ${items[items.length - 1]}`;
}
</script>
<template>
    <main class="flex flex-col w-full items-center">
        <h2 class="text-[#ec7537] text-center pt-12 mb-12">Contácto</h2>
        <div class="mb-12" v-if="contacto?.enlacesEstatales">
            <CardGuia v-for="enlace in contacto.enlacesEstatales" :key="enlace.id" :guia="enlace" />
        </div>
        <div v-if="contacto" class="mb-12 w-full  px-0 lg:px-12">
            <p class="text-center w-full ">
                Para atención de dudas respecto a plazos, términos, administración del sistema, desbloqueo de cuentas y
                reporte de errores del sistema comunicarse a los teléfonos: {{ unirConComasYO(contacto?.telefonos) }}, o
                enviar un correo electrónico a {{ unirConComasYO(contacto?.email) }}.
            </p>
        </div>
    </main>
</template>