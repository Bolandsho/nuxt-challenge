<template>
  <v-col cols="12" class="pa-0">
    <v-footer dark class="footer">
      <v-col
        cols="8"
        class="
          footerBanner
          rounded
          d-flex
          justify-space-between
          align-center
          pa-8
        "
      >
        <div>
          <h1>از همین الان خودت رو تغییر بده</h1>
          <p>
            برای اطلاع از اخبار و رویداد های جدید ما در
            <a href="#" style="color: white; font-family: tahoma"
              ><b>اینجا</b></a
            >
            کلیک کنید
          </p>
        </div>
        <v-btn
          color="white"
          style="color: #5db2d6"
          class="pa-6"
          rounded
          elevation="0"
          >می خوام بیشتر بدونم</v-btn
        >
      </v-col>
      <v-col md="8" class="d-flex justify-center align-start">
        <v-col md="4">
          <ul>
            <h3>راه های ارتباطی با ما</h3>
            <li>
              <v-icon>mdi-map-marker</v-icon>
              <small
                >پلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.</small
              >
            </li>
            <li>
              <v-icon>mdi-phone</v-icon>
              <small>شماره تماس: 091211234567 - 021-1234567</small>
            </li>
            <li>
              <a href="" target="_blank">
                <v-icon>mdi-whatsapp</v-icon>
              </a>
              <a href="" target="_blank">
                <v-icon>mdi-instagram</v-icon>
              </a>
            </li>
          </ul></v-col
        >
        <v-col md="4">
          <ul>
            <h3>اخبار و مقالات</h3>
            <li>
              <a href="#">مقالات و همایش 1</a>
            </li>
            <li>
              <a href="#">مقالات و همایش 2</a>
            </li>
            <li>
              <a href="#">مقالات و همایش 3</a>
            </li>
            <li>
              <a href="#">مقالات و همایش 4</a>
            </li>
          </ul></v-col
        >
        <v-col md="4">
          <ul>
            <h3>درباره تلفیق هنر</h3>
            <li>
              <small
                >علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                این صورت می توان امید داشت که تمام و دشواری موجود در
                ارائه</small
              >
            </li>
          </ul></v-col
        >
      </v-col>
      <v-col md="4" class="d-flex align-center justify-space-between"
        ><div class="d-flex flex-column justify-space-between">
          <v-btn color="info" class="pa-6 mt-3" rounded
            >مشاهده محصولات شرکت</v-btn
          >
          <v-btn color="white" class="pa-6 mt-3" rounded style="color: #2d9dcd"
            >مشاهده محصولات شرکت</v-btn
          >
        </div>
        <img width="130px" :src="require('@/assets/images/logo-sefid.png')" />
      </v-col>
    </v-footer>
  </v-col>
</template>

<script>
export default {}
</script>

<style>
</style>