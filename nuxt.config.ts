// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app:  {
head:{
    title: 'Flutter Blog',
    charset: 'utf-16',
}
 },
runtimeConfig: {
    public: {
        wpUrl:process.env.WP_URL
    }
}

})
