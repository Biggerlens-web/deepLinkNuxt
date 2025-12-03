// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    srcDir: 'app',
    css: ['~/assets/css/init.scss'],
    features: {
        inlineStyles: true
    },
    runtimeConfig: {
        public: {
            siteTarget: (process.env.SITE_TARGET as string | undefined) || 'CN'
        }
    },
    devServer: {
        port: 3000
    },
    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                {
                    rel: 'apple-touch-icon',
                    href: '/favicon.ico'
                }
            ]
        }
    }
})
