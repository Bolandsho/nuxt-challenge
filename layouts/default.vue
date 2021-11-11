<template>
    <v-app>
        <v-main class="main">
            <Nuxt />
        </v-main>
        <Footer />
    </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Footer from '~/components/section/Footer'

export default Vue.extend({
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/',
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire',
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
        }
    },
    components: { Footer },
})
</script>

<style lang="scss" scoped>
.main {
    background: rgb(215, 237, 246);
    background: linear-gradient(
        40deg,
        rgba(215, 237, 246, 1) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 1) 60%,
        rgba(253, 236, 222, 1) 100%
    );
}
</style>
