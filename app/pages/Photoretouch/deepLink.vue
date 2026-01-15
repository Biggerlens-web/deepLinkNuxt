<template>
    <div>
        <a :href="appStoreUrl" target="_blank" rel="noopener">如果未自动跳转，点击这里打开商店</a>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    let timeout: any = null
    const route = useRoute()
    const hrefQuery = route.fullPath.split('?')[1]

    const appStoreUrl = `https://apps.apple.com/cn/app/photo-retouch-%E6%B6%88%E9%99%A4%E7%AC%94%E5%8F%8Ap%E5%9B%BE%E4%BF%AE%E5%9B%BE%E8%BD%AF%E4%BB%B6-%E7%A5%9E%E5%A5%87%E6%A9%A1%E7%9A%AE%E6%93%A6/id1230394683?platform=iphone`;
    const isIOS = typeof navigator !== 'undefined' && /iP(hone|od|ad)/.test(navigator.userAgent)
    const iosDeepUrl = `itms-apps://itunes.apple.com/app/id1230394683`

    onMounted(() => {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                if (timeout !== null) {
                    clearTimeout(timeout)
                    timeout = null
                }
            }
        })

        function trigger() {
            const to = appStoreUrl
            window.location.href = to
        }
        timeout = setTimeout(trigger, 2000)

    })

</script>

<style lang="scss" scoped></style>
