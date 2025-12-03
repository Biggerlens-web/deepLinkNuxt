<template>
    <div class="CrossBox">
        <div class="cloumnLine">
            <div class="cloumnItem" v-for="i in 5" :key="i"></div>
        </div>
        <div class="rowLine">
            <div class="rowItem" v-for="i in 10" :key="i"></div>
        </div>
        <img :src="logo" alt="logo" />
    </div>
</template>

<script setup lang="ts">
    import logo from '@/assets/矩形@2x.png'
</script>

<style lang="scss" scoped>
    .CrossBox {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        .cloumnLine {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 2rem;

            .cloumnItem {
                width: 0.1rem;
                height: 100%;
                background: linear-gradient(rgba(249, 249, 249, 0) 0%, #f5f5f5 14%, #f5f5f5 81%, rgba(241, 241, 241, 0) 100%);
            }
        }

        .rowLine {
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: calc(100% - 8rem);
            padding: 0 2rem;

            .rowItem {
                &:not(:last-child) {
                    margin-bottom: 2.5rem;
                }

                height: 0.1rem;
                width: 100%;
                background: linear-gradient(rgba(249, 249, 249, 0) 0%, #f5f5f5 14%, #f5f5f5 81%, rgba(241, 241, 241, 0) 100%);
            }
        }

        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 40vw;
            height: auto;
        }
    }
</style>
