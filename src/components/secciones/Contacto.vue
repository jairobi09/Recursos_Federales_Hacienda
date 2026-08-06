<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { IntContacto } from "./interfaces/intContacto";
import { fetchPublicJson } from "../utils/utils";
import CardGuia from "../utils/CardGuia.vue";

const contacto = ref<IntContacto | null>(null);
onMounted(async () => {
  contacto.value = await fetchPublicJson("/secciones/contacto.json");
});
function unirConComasYO(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} o ${items[1]}`;

  return `${items.slice(0, -1).join(", ")} o ${items[items.length - 1]}`;
}
</script>
<template>
  <main class="flex flex-col w-full items-center">
    <h2 class="text-[#ec7537] text-center pt-12 mb-6">Contacto</h2>
    <p class="mb-12">
      En esta sección podrás consultar el directorio de las personas enlace de
      las instancias coordinadoras de los Fondos de Aportaciones Federales y de
      las responsables de los programas presupuestarios en la Administración
      Pública Federal, así como de las Secretarías de Finanzas o sus homólogas
      en las entidades federativas. Asimismo, encontrarás el listado de usuarios
      observadores vigentes.
    </p>
    <div class="mb-12 grid grid-cols-3 gap-4 w-full" v-if="contacto?.enlacesEstatales">
      <CardGuia
        v-for="enlace in contacto.enlacesEstatales"
        :key="enlace.id"
        :guia="enlace"
        class="col-span-3 lg:col-span-1"
      />
    </div>
    <div v-if="contacto" class="mb-12 w-full px-0 lg:px-12">
      <p class="text-center w-full">
        Para atención de dudas respecto a plazos, términos, administración del
        sistema, desbloqueo de cuentas y reporte de errores del sistema
        comunicarse a los teléfonos: {{ unirConComasYO(contacto?.telefonos) }},
        o enviar un correo electrónico a {{ unirConComasYO(contacto?.email) }}.
      </p>
    </div>
  </main>
</template>
