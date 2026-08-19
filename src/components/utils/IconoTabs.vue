<script lang="ts" setup>
import Csv from './Icons/Csv.vue';
import Excel from './Icons/Excel.vue';
import Link from './Icons/Link.vue';
import Pdf from './Icons/Pdf.vue';
import Zip from './Icons/Zip.vue';
import FlechaTrendArriba from './Tabs/FlechaTrendArriba.vue';
import GeoAlt from './Icons/GeoAlt.vue';
import CalculatorFill from './Icons/CalculatorFill.vue';
import GraphUpArrow from './Icons/GraphUpArrow.vue';
import CheckCircleFill from './Icons/CheckCircleFill.vue';

interface IntIcono {
    icono: string
}

const props = defineProps<IntIcono>()
const extensionesExcel = ["xlsx", "xlsm"];
const extensionesZip = ["zip", "rar"];


</script>

<template>
    <div class="flex items-center justify-center p-[0.5rem]">
        <Csv v-if="icono === 'csv'" />
        <Excel v-else-if="extensionesExcel.includes(icono)" />
        <Pdf v-else-if="icono === 'pdf'" />
        <Zip v-else-if="extensionesZip.includes(icono)" />
        <Link v-else-if="icono === 'link'" />
        <GeoAlt v-else-if="icono === 'geoAlt'" />
        <CalculatorFill v-else-if="icono === 'calculatorFill'" />
        <GraphUpArrow v-else-if="icono === 'graphUpArrow'" />
        <CheckCircleFill v-else-if="icono === 'checkCircleFill'" />

        <FlechaTrendArriba v-else />
    </div>
</template>