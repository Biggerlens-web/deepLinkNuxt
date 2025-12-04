<template>
    <div class="open_menu_mask">
        <div class="click_tips">
            <span>
                {{ `${isEN ? '1.Tap "..."\n2.select "Open in default browser"' : '1.点击“...”\n2.选择“用默认浏览器打开”'}` }}
            </span>
            <img src="/assets/clickMenu.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
    const siteTarget = useRuntimeConfig().public.siteTarget

    const isEN = computed(() => siteTarget === 'EN')

</script>

<style lang="scss" scoped>
    .open_menu_mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;

        .click_tips {
            position: absolute;
            right: 20px;

            span {
                transform: translateY(40px);
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 16px;
                color: #FFFFFF;
                white-space: pre-line;
                line-height: 1.8;
                display: inline-block;
            }

            img {
                width: 48.2px;
                height: 51.01px;
            }
        }
    }
</style>
