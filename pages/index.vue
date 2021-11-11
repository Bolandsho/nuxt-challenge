<template>
    <div class="py-10">
        <v-container>
            <div class="d-flex feq">
                <v-col cols="6" class="d-flex justify-center px-5 flex-column">
                    <div class="bold mb-5">سوالات متداول شما عزیزان</div>

                    <v-expansion-panels :accordion="true" v-model="panel" flat>
                        <v-expansion-panel class="panel mb-3">
                            <v-expansion-panel-header
                                class="d-flex head"
                                :class="panel == 0 && 'orange--text'"
                            >
                                <img
                                    src="@/assets/svg/vector.svg"
                                    alt="image"
                                />
                                اساس نامه و قوانین داخلی شرکت تلفیق هنر چیست؟
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="body">
                                <div class="pt-2 grey--text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی تکنولوژی مورد نیاز
                                </div>
                                <v-btn
                                    color="primary"
                                    text
                                    small
                                    class="float-end"
                                >
                                    ادامه مطلب
                                </v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="panel mb-3">
                            <v-expansion-panel-header
                                class="d-flex head"
                                :class="panel == 1 && 'orange--text'"
                            >
                                <img
                                    src="@/assets/svg/vector2.svg"
                                    alt="image"
                                />
                                من چطوری تو شرکت تلفیق هنر میتونم درآمد زایی کنم
                                ؟
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="body">
                                <div class="pt-2 grey--text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی تکنولوژی مورد نیاز
                                </div>
                                <v-btn
                                    color="primary"
                                    text
                                    small
                                    class="float-end"
                                >
                                    ادامه مطلب
                                </v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="panel">
                            <v-expansion-panel-header
                                class="d-flex head"
                                :class="panel == 2 && 'orange--text'"
                            >
                                <img
                                    src="@/assets/svg/vector3.svg"
                                    alt="image"
                                />
                                روی چه محصولاتی این شرکت فعالیت داره ؟
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="body">
                                <div class="pt-2 grey--text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و
                                    مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی تکنولوژی مورد نیاز
                                </div>
                                <v-btn
                                    color="primary"
                                    text
                                    small
                                    class="float-end"
                                >
                                    ادامه مطلب
                                </v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
                <v-col cols="6" class="d-flex">
                    <v-img src="@/assets/images/image.png" alt="image" />
                </v-col>
            </div>
        </v-container>

        <div class="bold mb-7 text-center">چرا تلفیق هنر را انتخاب کنم ؟</div>
        <div class="d-flex wrapper">
            <div class="slider">
                <v-carousel
                    height="100%"
                    :show-arrows="false"
                    hide-delimiter-background
                >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <img src="@/assets/images/slide2.jpg" />
                    </v-carousel-item>
                </v-carousel>
            </div>

            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>

        <v-container class="d-flex align-center justify-center poem">
            <v-col cols="6"> <v-img src="@/assets/images/text.png" /></v-col>
        </v-container>
        <v-img src="@/assets/images/sub.png" class="subImage" />
    </div>
</template>

<script lang='ts'>
import ProductItem from '../components/ui/ProductItem.vue'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
    data() {
        return {
            panel: 0,

            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        }
    },
    async fetch() {
        await this.$store.dispatch('posts/getPosts')
    },
    components: {
        ProductItem,
    },
    computed: {
        ...mapGetters({
            posts: 'posts/posts',
        }),
    },
})
</script>

<style scoped lang="scss">
.bold {
    font-size: 1.4rem;
}
.feq {
    margin-bottom: 120px;
    .panel {
        border-radius: 18px;
        border: 0px;
        background: #fffcf9;
        box-shadow: 0px 5px 26px -6px rgba(0, 0, 0, 0.25);

        img {
            height: 17px !important;
            flex: unset;
            padding-left: 10px;
        }
        .head {
            background: #fff;
            font-size: 0.85rem !important;
            border-bottom-right-radius: 18px;
            border-bottom-left-radius: 18px;
            padding: 15px !important;
            min-height: unset;
        }
        .body {
            border-radius: 18px;
            line-height: 1.5rem;
        }
    }
}

.wrapper {
    position: relative;

    .slider {
        overflow: hidden;
        position: absolute;
        background: #456;
        top: 50%;
        width: 100px;
        height: 100px;
        z-index: 100;
        width: 40vw;
        height: 500px;
        border-top-left-radius: 300px;
        border-bottom-left-radius: 300px;
        transform: translateY(-50%);

        img {
            width: 100%;
        }
    }
}

.poem {
    margin-top: 170px;
    margin-bottom: 40px;
}

.subImage {
    position: absolute;
    bottom: 0px;
    height: 220px;
    width: 350px;
    object-fit: contain;
}
</style>
