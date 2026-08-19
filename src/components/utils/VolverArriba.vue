<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Controla la visibilidad del botón "Volver al inicio".
 * El botón se muestra cuando el usuario ha desplazado
 * la página más de 300 píxeles verticalmente.
 */
const mostrarBoton = ref(false)

/**
 * Detecta el desplazamiento vertical de la página y
 * actualiza el estado de visibilidad del botón.
 */
const detectarScroll = () => {
  mostrarBoton.value = window.scrollY > 300
}

/**
 * Desplaza la vista suavemente hasta el inicio de la página.
 */
const irArriba = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Registra el evento de scroll al montar el componente
 * para controlar la visualización del botón.
 */
onMounted(() => {
  window.addEventListener('scroll', detectarScroll)
})

/**
 * Elimina el evento de scroll al desmontar el componente
 * para evitar fugas de memoria y listeners innecesarios.
 */
onUnmounted(() => {
  window.removeEventListener('scroll', detectarScroll)
})
</script>

<template>
  <!--
    Botón flotante para regresar al inicio de la página.
    Se muestra únicamente cuando el usuario ha realizado
    un desplazamiento vertical significativo.
  -->
  <Transition name="fade">
    <button
      v-show="mostrarBoton"
      @click="irArriba"
      class="fixed flex items-center justify-center cursor-pointer bottom-4 text-2xl aspect-square w-[3rem] right-4 lg:right-6 z-50 rounded-full bg-[#04878c] text-[var(--color-blanco)] px-3 shadow-lg hover:scale-110 transition"
    >
      <!-- Ícono de flecha hacia arriba -->
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>