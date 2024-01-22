// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.4_nuxt@3.8.2_vite@4.5.1/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.4_nuxt@3.8.2_vite@4.5.1/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@8.0.0-beta.12_vue-router@4.2.5_vue@3.3.10/node_modules/@nuxtjs/i18n/dist/runtime/plugins/composition").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@8.0.0-beta.12_vue-router@4.2.5_vue@3.3.10/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/app/plugins/view-transitions.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_eslint@8.55.0_typescript@5.3.2_vite@4.5.1_vue-tsc@1.8.24/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../plugins/scroll.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
