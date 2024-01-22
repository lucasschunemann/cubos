<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    value?: number
  }>(),
  {
    value: 0,
  },
);

const style = computed(() => ({
  'clip-path': `inset(0 ${(10 - props.value) * 10}% 0 0)`,
  // Removendo o filtro CSS, pois as imagens já estão nas cores corretas
}))
</script>

<template>
  <div class="relative aspect-11/2">
    <img src="./images/stars.png" class="absolute inset-0" aria-hidden="true">
    <img src="./images/stars-filled.png" class="absolute inset-0" aria-hidden="true" :style="style">
  </div>
</template>
