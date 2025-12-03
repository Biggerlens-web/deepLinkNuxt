<template>
    <div class="main">
        <deeplinkView />
    </div>
</template>

<script lang="ts" setup>
    import deeplinkView from '@/components/deeplinkView.vue'
    import logoPng from '@/assets/faviconFormmaster.png'
    import { onMounted } from 'vue';
    let timeout: any = null
    const appStoreLink = `https://apps.apple.com/cn/app/%E8%A1%A8%E6%A0%BC-xlsx%E5%88%B6%E4%BD%9C%E5%8A%9E%E5%85%AC%E8%BD%AF%E4%BB%B6/id1518721142?platform=iphone`;
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
            { property: 'og:url', content: useRequestURL().href },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:image', content: logoAbs }
        ]
    })
    onMounted(() => {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {

                if (timeout !== null) {
                    clearTimeout(timeout)
                    timeout = null
                }
            }
        })

        timeout = setTimeout(() => {
            window.location.href = appStoreLink
        }, 2000)

    })

</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
