<script lang="ts" setup>
import { computed } from 'vue';
import Csv from './Icons/Csv.vue';
import Excel from './Icons/Excel.vue';
import Link from './Icons/Link.vue';
import Pdf from './Icons/Pdf.vue';
import Zip from './Icons/Zip.vue';

interface IntIcono {
  extension: string
}

const props = defineProps<IntIcono>()

const extensionesExcel = new Set(["xlsx", "xlsm"]);
const extensionesZip = new Set(["zip", "rar"]);
const bgColor = computed(() => {
  if (props.extension === 'csv') return '#0369a1'
  if (extensionesExcel.has(props.extension)) return '#16a34a'
  if (props.extension === 'pdf') return '#FF2B00'
  if (extensionesZip.has(props.extension)) return '#b45309'
  return '#b45309'
})
</script>

<template>
  <div
    class="flex items-center justify-center p-[0.5rem]"
      :style="{ backgroundColor: bgColor }"

  >
    <Csv class="text-white" v-if="extension === 'csv'" />
    <Excel class="text-white" v-else-if="extensionesExcel.has(extension)" />
    <Pdf class="text-white" v-else-if="extension === 'pdf'" />
    <Zip class="text-white" v-else-if="extensionesZip.has(extension)" />
    <Link class="text-white" v-else />
  </div>
</template>