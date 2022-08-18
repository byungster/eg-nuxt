import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        // css: [
        //     '~/assets/xeicon.css',
        // ]
        // link: [
        //     { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css' },
        // ]
    },
    plugins: [
        '~/plugins/firebase.js'
    ],
});
