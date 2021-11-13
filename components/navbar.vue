<template>
  <v-col cols="12" class="mainNav">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <nuxt-link class="navLink" to="/" active-class="active">خانه</nuxt-link>
        <nuxt-link class="navLink" to="/shop" active-class="active"
          >فروشگاه</nuxt-link
        >
        <nuxt-link class="navLink" to="/news" active-class="active"
          >مقالات و اخبار</nuxt-link
        >
        <v-spacer />
        <!-- <v-btn link to="/">Home</v-btn>
        <v-btn link to="/">Home</v-btn> -->
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {}
</script>

<style>
</style>