<script setup lang="ts">
import type { ExternalIds } from '~/types'

const props = defineProps<{
  links: ExternalIds
}>()

const imdbType = computed(() => {
  if (props.links.imdb_id?.startsWith('nm'))
    return 'name'

  return 'title'
})
</script>
  
<template>
  <div flex="~ row gap5" items-center text-lg mt-5>
    <a
      v-if="links.instagram_id"
      :href="`https://instagram.com/${links.instagram_id}`"
      target="_blank"
      aria-label="Link to Instagram account"
      rel="noopener"
      n-link
    >
      <!-- Aplicando a cor #8d4ec5 -->
      <div i-simple-icons:instagram :style="{ color: '#8d4ec5' }" />
    </a>
    <a
      v-if="links.imdb_id"
      :href="`https://www.imdb.com/${imdbType}/${links.imdb_id}`"
      target="_blank"
      aria-label="Link to IMDb account"
      rel="noopener"
      n-link
    >
      <!-- Aplicando a cor #8d4ec5 -->
      <div i-cib:imdb :style="{ color: '#8d4ec5' }" />
    </a>
    <a
      v-if="links.email"
      :href="links.email"
      aria-label="Link to Email"
      rel="noopener" scale-120
      n-link
    >
      <!-- Aplicando a cor #8d4ec5 -->
      <div i-ph-envelope-simple :style="{ color: '#8d4ec5' }" />
    </a>
    <a
      v-if="links.homepage"
      :href="links.homepage"
      aria-label="Link to Homepage"
      rel="noopener" scale-120
      n-link
    >
      <!-- Aplicando a cor #8d4ec5 -->
      <div i-ph-link-simple :style="{ color: '#8d4ec5' }" />
    </a>
    <slot />
  </div>
</template>
 