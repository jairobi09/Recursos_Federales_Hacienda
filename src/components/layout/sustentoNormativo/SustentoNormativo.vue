<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { basePath, fetchPublicJson } from '../../utils/utils'

interface CardItem {
  text: string
  desc?: string
  img: string
  link: string
}

const items = ref<CardItem[] | null>(null)

const container = ref<HTMLElement | null>(null)

const isPaused = ref(false)

let animationFrame: number | null = null

let direction = 1

const speed = 1

function animate() {
  const element = container.value

  if (element && !isPaused.value) {
    const maxScroll =
      element.scrollWidth - element.clientWidth

    // console.log("element", element.scrollLeft);

    if (element.scrollLeft >= maxScroll) {
      console.log("der");

      direction = -1
    }

    else if (element.scrollLeft <= 0) {
      console.log("izq");

      direction = 1
    }
    element.scrollLeft += speed * direction;

  }

  animationFrame = requestAnimationFrame(animate)
}

function pause() {
  isPaused.value = true
}

function resume() {
  isPaused.value = false
}

function move(distance: number) {
  const element = container.value

  if (!element) return

  // Pausamos momentáneamente la animación
  isPaused.value = true

  element.scrollBy({
    left: distance,
    behavior: 'smooth'
  })

  // Reanudamos después del movimiento
  setTimeout(() => {
    isPaused.value = false
  }, 600)
}

onMounted(async () => {
  items.value = await fetchPublicJson("/layout/sustentoNormativo/sustentoNormativo.json")
  animationFrame = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>
<template>
  <hr class="self-center mb-2.5 w-full pt-4 border-0 border-b-[1px] border-[#d1d1d1]">
  <h2 class="subtitulo my-4">Sustento Normativo</h2>
  <div class="w-full flex gap-4  items-center relative">
    <div ref="container" class="carousel px-[3rem]" @mouseenter="pause" @mouseleave="resume" @touchstart="pause"
      @touchend="resume">
      <div class="track ">
        <div class="flex  items-center" v-for="(item, index) in items" :key="index">
          <img :src="`${basePath}${item.img}`" :alt="item.text" class=" imagen-sn" />
          <a :href="item.link" target="_blank" rel="noopener noreferrer"
            class="px-[22px] py-[10px] flex items-center justify-center flex-col h-full max-w-[80dvw] lg:max-w-[40dvw] bg-white rounded-xl  Noto-Sans font-medium text-black border border-[#ec7537] whitespace-normal text-center leading-tight transition-all duration-200 hover:shadow-[3px_3px_0px_0px_#ec7537] hover:-translate-y-1 active:translate-x-0 active:translate-y-0">


            <div class="flex flex-col items-center justify-center">
              <h5>{{ item.text }}</h5>

              <p v-if="item.desc">
                {{ item.desc }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <button
      class="rounded-full absolute boton-flecha left-1  w-[2.5rem] h-[2.5rem] text-xl flex items-center justify-center bg-[#ec7537] opacity-30 hover:opacity-100 text-white cursor-pointer"
      @click="move(-300)" aria-label="Mover hacia la izquierda"
      type="button">
      ←
    </button>
    <button
      class="rounded-full absolute right-1 boton-flecha  w-[2.5rem] h-[2.5rem] text-xl flex items-center justify-center bg-[#ec7537] opacity-30 hover:opacity-100 text-white cursor-pointer"
      @click="move(300)" aria-label="Mover hacia la derecha"
      type="button">
      →
    </button>
  </div>
</template>
<style scoped>
.boton-flecha {
  top: calc(50% - 1.5rem);
}

.imagen-sn {
  filter: sepia()saturate(4)hue-rotate(330deg)brightness(1.05);
  width: 5rem;
}



.carousel {
  flex: 1;
  min-width: 0;

  overflow-x: auto;
  overflow-y: hidden;

  scroll-behavior: smooth;

  scrollbar-width: thin;

  cursor: grab;
}

.carousel:active {
  cursor: grabbing;
}

/* Chrome / Edge / Safari */
.carousel::-webkit-scrollbar {
  height: 7px;
}

.carousel::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

.track {
  display: flex;
  gap: 1rem;
  align-items: stretch;
  width: max-content;
  padding: 10px 2px 15px;
}

.subtitulo {
  font-family: "Patria Bold" ,  sans-serif;
  color: #ec7537;
  text-align: center;
}
</style>