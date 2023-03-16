// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
// css: ['~/assets/styles/main.scss'],
// vite : {
//     css: {
//         preprocessorOptions : {
//             SCSS : {
//                 additionalData: '@import "@/assets/styles/_config.scss";'  
//             }
//         }
//     }
// },
runtimeConfig: {
    public: {
        wpUrl:process.env.WP_URL
    }
}
})
