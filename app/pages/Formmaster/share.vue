<template>
    <div>
        <deeplinkView />
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import deeplinkView from '@/components/deeplinkView.vue'
    import logoPng from '@/assets/faviconFormmaster.png'
    const route = useRoute()
    let timeout: any = null
    const siteTarget = useRuntimeConfig().public.siteTarget
    const origin = useRequestURL().origin
    const logoAbs = new URL(logoPng, origin).toString()

    useHead({
        title: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work',
        link: [
            { rel: 'icon', type: 'image/png', href: logoPng },
            { rel: 'apple-touch-icon', href: logoPng }
        ],
        meta: [
            { property: 'og:title', content: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work' },
            { property: 'og:image', content: logoAbs },
            { property: 'og:url', content: origin + route.fullPath },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:image', content: logoAbs }
        ]
    })
    onMounted(() => {
        const screenWidth = window.innerWidth
        let platform: string = ''
        if (screenWidth > 768) {
            platform = 'pc'
        } else {
            platform = 'mobile'
        }
        console.log('platform', platform);
        const fullPath: string = route.fullPath
        const query: string = fullPath.split('?')[1] || ''

        const appStoreLink: string = siteTarget === 'CN' ? `https://website-test.biggerlens.com/?params=${query}&platform=${platform}` : `https://photo.retouch.cc/?params=${query}&platform=${platform}`
        timeout = setTimeout(() => {
            window.location.href = appStoreLink
        }, 2000)
    })
</script>

<style lang="scss" scoped></style>
