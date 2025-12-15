<template>
    <div class="main">
        <deeplinkView />
        <openMenuMask v-if="isWeChat" />
    </div>
</template>

<script lang="ts" setup>
    import deeplinkView from '@/components/deeplinkView.vue'
    import openMenuMask from '@/components/openMenuMask.vue'
    import { onMounted } from 'vue';
    let timeout: any = null
    const appStoreLink = `https://apps.apple.com/cn/app/%E8%A1%A8%E6%A0%BC-xlsx%E5%88%B6%E4%BD%9C%E5%8A%9E%E5%85%AC%E8%BD%AF%E4%BB%B6/id1518721142?platform=iphone`;
    const siteTarget = useRuntimeConfig().public.siteTarget
    const isWeChat = ref<boolean>(false)

    function isThirdPartyApp(ua: string): boolean {
        return /(MicroMessenger|MQQBrowser|QQ|Qzone|DingTalk|AlipayClient|Weibo|BaiduBoxApp|baiduboxapp|Toutiao|NewsApp|Douyin)/i.test(ua)
    }
    isWeChat.value = typeof navigator !== 'undefined' && isThirdPartyApp(navigator.userAgent)


    useHead({
        title: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work',

        meta: [
            { property: 'og:title', content: siteTarget === 'CN' ? '表格大师APP-简单快捷 高效办公' : 'Spreadsheet Editor-Simple, convenient, and efficient work' },

            { property: 'og:url', content: useRequestURL().href },
            { name: 'twitter:card', content: 'summary_large_image' },

        ]
    })
    onMounted(() => {
        console.log('isWeChat', isWeChat.value)
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
