<template>
  <v-col cols="12" class="pa-0">
    <!-- navbar -->
    <Navbar />

    <!-- landing for faq -->
    <v-col cols="12">
      <v-row justify="center" align="center">
        <v-col md="6">
          <h1>سوالات متداول شما عزیزان</h1>
          <v-expansion-panels class="rounded-xl">
            <v-expansion-panel
              class="rounded-xl py-2 my-2 elevation-6"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-expansion-panel-header>
                <v-icon color="mx-4" style="flex: 0.1 0 auto !important">{{
                  item.icon
                }}</v-icon
                >{{ item.header }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>{{ item.content }}</p>
                <a href="#" class="float-left">ادامه مطلب</a>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col md="6">
          <v-img :src="require('@/assets/images/land.png')" contain></v-img>
        </v-col>
      </v-row>
    </v-col>

    <!-- slider section -->
    <v-col cols="12" class="pa-0" style="position: relative">
      <v-row class="pa-0 ma-0">
        <v-col md="8" class="pa-0 ma-0 mr-auto">
          <v-flex offset-sm3>
            <h1 class="ma-4 ml-auto" style="width: 100% !important">
              چرا تلفیق هنر رو انتخاب کنیم؟
            </h1>
          </v-flex>
          <Hooper
            dir="ltr"
            :itemsToShow="4"
            :itemsToSlide="3"
            :wheelControl="false"
            infiniteScroll
            :autoPlay="true"
            :playSpeed="4000"
          >
            <Slide v-for="(item, i) in sliderItems" :key="i">
              <v-card
                elevation="0"
                class="mx-3 pilotSlide text-right pa-2"
                dir="rtl"
              >
                <div
                  style="width: 100% !important"
                  class="d-flex justify-start"
                >
                  <v-icon color="#E3CC00">mdi-star</v-icon> {{ item.stars }}
                </div>
                <v-img :src="item.image" height="200px" contain></v-img>
                <h3>{{ item.title }}</h3>
                <v-card-actions>
                  <v-btn
                    color="white"
                    elevation="0"
                    style="border: 2px solid #f5a06f !important; color: #f5a06f"
                    >خرید</v-btn
                  >
                  <v-spacer />
                  {{ item.price }}
                </v-card-actions>
              </v-card>
            </Slide>
          </Hooper>
          <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            :show-arrows="false"
            class="imageCarousel"
          >
            <v-carousel-item v-for="(slide, i) in 4" :key="i">
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  :src="require('@/assets/images/img.jpg')"
                  eager
                  height="100%"
                  width="100%"
                ></v-img>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>

    <!-- bottom content section -->
    <v-col cols="12" style="position: relative !important">
      <v-row style="height: 500px" justify="center" align="center">
        <h1 class="nastaligh ml-12">گویی تو که من ز هر هنر با خبرم</h1>
        <h1 class="nastaligh mr-12">این بی خبری بس که ز خود بی خبری</h1>
        <img class="absRight" :src="require('@/assets/images/sheikh.png')" />
      </v-row>
    </v-col>

    <!-- footer -->
    <mayFooter />
  </v-col>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import Navbar from '@/components/navbar.vue'
import mayFooter from '@/components/footer.vue'
export default {
  components: {
    Navbar,
    Hooper,
    Slide,
    mayFooter,
  },
  data() {
    return {
      items: [
        {
          header: 'اساس نامه و قوانین شرکت تلفیق هنر چیست؟',
          icon: 'mdi-account',
          content:
            'پلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد  ',
        },
        {
          header: 'چطور میتونم تو شرکت تلفیق هنر درآمدزایی کنم؟',
          icon: 'mdi-sign-caution',
          content:
            'پلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد  ',
        },
        {
          header: 'رو چه محصولاتیفعالیت داره این شرکت',
          icon: 'mdi-more',
          content:
            'پلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد  ',
        },
      ],
      sliderItems: [
        {
          title: 'به اسم تنگ پرواز برای اصفهان یک کوزه بسیار زیاد1',
          price: '3,600,000',
          image: require('@/assets/images/pilot/1.png'),
          stars: '1',
        },
        {
          title: 'به اسم تنگ پرواز برای اصفهان یک کوزه بسیار زیاد2',
          price: '5,600,000',
          image: require('@/assets/images/pilot/2.png'),
          stars: '2',
        },
        {
          title: 'به اسم تنگ پرواز برای اصفهان یک کوزه بسیار زیاد3',
          price: '6,600,000',
          image: require('@/assets/images/pilot/3.png'),
          stars: '3',
        },
        {
          title: 'به اسم تنگ پرواز برای اصفهان یک کوزه بسیار زیاد4',
          price: '1,600,000',
          image: require('@/assets/images/pilot/4.png'),
          stars: '4',
        },
      ],
    }
  },
}
</script>

<style>
</style>