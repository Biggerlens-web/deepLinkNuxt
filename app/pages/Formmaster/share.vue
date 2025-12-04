<template>
    <div>
        <deeplinkView />
        <openMenuMask v-if="isWeChat" />
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import deeplinkView from '@/components/deeplinkView.vue'
    import openMenuMask from '@/components/openMenuMask.vue'
    const route = useRoute()
    let timeout: any = null
    const siteTarget = useRuntimeConfig().public.siteTarget
    const origin = useRequestURL().origin
    const isWeChat = ref<boolean>(false)

    isWeChat.value = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent)

    useHead({
        title: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work',

        meta: [
            { property: 'og:title', content: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work' },

            { property: 'og:url', content: origin + route.fullPath },
            { name: 'twitter:card', content: 'summary_large_image' },

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
