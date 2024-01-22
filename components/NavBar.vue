<template>
  <div
    class="flex row justify-evenly items-center py-5 px-5 lg:px-5 border-t base bg-black"
  >
  <IconCubos width="100" height="25" alt="Logo"/>
    
    <NuxtLink v-slot="{ isActive }" to="/" title="Home">
      <div
        class="text-2xl"
        :class="isActive ? 'i-ph-house-fill text-custom-purple' : 'i-ph-house'"
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/movie" title="Movies">
      <div
        class="text-2xl"
        :class="isActive ? 'i-ph-film-strip-fill text-custom-purple' : 'i-ph-film-strip'"
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/tv" title="TV Shows">
      <div
        class="text-2xl"
        :class="isActive ? 'i-ph-television-simple-fill text-custom-purple' : 'i-ph-television-simple'"
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/search" title="Search">
      <div
        class="text-2xl"
        :class="isActive ? 'i-ph-magnifying-glass-fill text-custom-purple' : 'i-ph-magnifying-glass'"
      />
    </NuxtLink>
  </div>
</template>


<style scoped>
.text-custom-purple {
  color: #8d4ec5;
}
</style>