
import IconCubos from './icon/IconCubos.vue';
<template>
  <footer p="y15 x15" flex="~ col gap4">
    <div flex="~ row gap2" items-center my2>
      <IconCubos width="100" height="25" alt="Logo"/>
      <div text-xl>
        Movies
      </div>
    </div>
    <div flex="~ row gap2" items-center>
      <div op50 text-sm>
        Made with
      </div>
      <a href="https://nuxt.com/" target="_blank" title="Cubos">
        <IconNuxt3 h5 />
      </a>
    </div>
    <div flex="~ row gap2" items-center>
      <p text-true-gray:90 text-sm>
        Data provided by&nbsp;
        <a op100 target="_blank" href="https://www.themoviedb.org/" title="The Movie Database" rel="noopener" n-link-text>
          <IconTMDB inline h4 />
        </a>
      </p>
    </div>
  </footer>
</template>
