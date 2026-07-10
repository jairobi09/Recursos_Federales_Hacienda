<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  url: string
}

const props = defineProps<Props>()

const cargado = ref(false)

const embedUrl = computed((): string => {
  try {
    const url = new URL(props.url)

    // Playlist
    const list = url.searchParams.get('list')
    if (list && !url.searchParams.get('v')) {
      return `https://www.youtube.com/embed/videoseries?list=${list}`
    }

    // Video dentro de una playlist
    if (list && url.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${url.searchParams.get('v')}?list=${list}`
    }

    // youtube.com/watch?v=
    if (url.hostname.includes('youtube.com')) {
      const id = url.searchParams.get('v')
      return id
        ? `https://www.youtube.com/embed/${id}`
        : props.url
    }

    // youtu.be/
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.substring(1)
      return id
        ? `https://www.youtube.com/embed/${id}`
        : props.url
    }

    // Ya viene embebido
    if (url.pathname.includes('/embed/')) {
      return props.url
    }

    return props.url
  } catch {
    return props.url
  }
})

const iframeCargado = () => {
  cargado.value = true
}
</script>

<template>
  <div class="video-container">
    <div
      v-if="!cargado"
      class="skeleton"
    ></div>

    <iframe
      v-show="cargado"
      :src="embedUrl"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      @load="iframeCargado"
    />
  </div>
</template>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f5f5f5 50%,
    #eeeeee 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
</style>