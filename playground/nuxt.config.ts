import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: ['@remindgmbh/nuxt-logger'],
    logger: {
        level: 3,
    },
})
