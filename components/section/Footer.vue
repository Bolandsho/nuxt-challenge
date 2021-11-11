<template>
    <v-footer
        :absolute="!fixed"
        app
        color="secondary"
        dark
        class="d-flex flex-column pa-0"
    >
        <v-container fluid class="footer">
            <div class="action d-flex align-center justify-space-between">
                <div>
                    <h1 class="mb-2">از همین الان خودت رو تغییر بده</h1>
                    <div>
                        برای اطلاع از تمامی پلن های درآمدی و کسب اطلاات و با حتی
                        مصاحبه
                        <a href="#"><b>اینجا کلیک</b></a>
                        کنید
                    </div>
                </div>
                <div>
                    <v-btn
                        rounded
                        class="mt-2 primary--text"
                        dark
                        color="white"
                        elevation="0"
                    >
                        میخوام بیشتر بدونم
                    </v-btn>
                </div>
            </div>
            <div class="d-flex">
                <v-col cols="3" class="pa-0">
                    <div class="bold mb-3">راه های ارتباطی با ما</div>
                    <div class="mb-2 d-flex align-start">
                        <v-icon class="ml-1" size="20">mdi-send</v-icon>
                        خیابان خرمشهر، دشتک، پلاک پنج واحد یک، خیابان سهرودی
                    </div>
                    <div class="mb-3 d-flex align-star">
                        <v-icon class="ml-1" size="20">mdi-phone</v-icon>
                        شماره تماس : 77125165 - 88445030
                    </div>
                    <div>
                        <v-icon>mdi-whatsapp</v-icon>
                        <v-icon>mdi-instagram</v-icon>
                    </div>
                </v-col>

                <v-col cols="3" class="pa-0 pr-12">
                    <a href="#" class="bold mb-3">اخبار و مقالات</a>
                    <a href="#" class="mb-2">همایش های اول و اخبار اول</a>
                    <a href="#" class="mb-2">همایش هاب اول</a>
                    <a href="#" class="mb-2">همایش های اول و اخبار اول</a>
                    <a href="#" class="mb-2">همایش هاب اول</a>
                </v-col>
                <v-col cols="3" class="pa-0">
                    <div class="bold mb-3">درباره ی تلفیق هنر</div>
                    <div class="mb-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                    </div>
                </v-col>
                <v-col
                    cols="3"
                    class="pa-0 pr-5 d-flex align-center justify-space-between"
                >
                    <div>
                        <v-btn rounded class="blueBtn white--text">
                            مشاهده محصولات شرکت
                        </v-btn>
                        <v-btn
                            rounded
                            class="mt-2 primary--text"
                            dark
                            color="white"
                        >
                            مشاهده محصولات شرکت
                        </v-btn>
                    </div>
                    <div>
                        <img src="@/assets/images/logo-sefid.png" alt="" />
                    </div>
                </v-col>
            </div>
        </v-container>
        <div class="copy col-12">
            &copy; کلیه حقوق مادیو معنوی این وبسایت متعلق به شرکت تلفیق هنر می
            باشد.
        </div>
    </v-footer>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            fixed: false,
        }
    },
})
</script>

<style lang="scss">
.footer {
    width: 82%;
    padding: 70px 0px;
    padding-top: 120px;
    position: relative;
    display: flex;
    justify-content: center;

    .action {
        position: absolute;
        top: 0px;
        transform: translateY(-50%);
        padding: 50px 40px;
        border-radius: 10px;
        width: 85%;
        background: linear-gradient(94.17deg, #2d9dcd -25.45%, #c0dbe6 152.67%);

        h1 {
            font-size: 2rem;
            word-spacing: 0.3rem;
        }
        a {
            display: initial;
        }
    }

    img {
        height: 90px;
    }

    a {
        display: flex;
        text-decoration: none;
        color: #fff;
    }
}
.copy {
    padding: 8px 8%;
    font-size: 0.85rem;
    background: linear-gradient(92.88deg, #f2994a -25.12%, #c58c5a 85.23%);
}
.blueBtn {
    background-color: #2d9dcd !important;
}
</style>
