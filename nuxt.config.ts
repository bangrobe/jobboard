import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        transpile: [
            '@heroicons/vue'
        ]
    },
    runtimeConfig: {
        public: {
            BASE_API_URL: process.env.BASE_API_URL
        }
    },
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: [
                 '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue',
            ]
        }
    }
})
