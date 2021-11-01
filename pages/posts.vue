<template>
  <v-container>
    <v-col cols='12'>
      <v-card v-for='item in posts' :key='item.id' color='#ffa500'
              dark
              class='py-3 px-3 mt-3'
              shaped
              elevation='2'>
        <v-card-title class='text-h5 primary-text-color font-weight-bold'>
          {{ item.title }}
        </v-card-title>
        <v-card-text class='primary-text-color font-weight-medium'>
          {{ item.description }}
        </v-card-text>
        <v-card-actions class='justify-end'>
          <v-btn
            color='#1a1d21'
            elevation='2'
            :to="/post/ + item.id"
          >
            Read More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-container v-if='showMoreLoading' class='d-flex flex-column align-center justify-center'>
        <v-btn
          v-if='!moreLoading'
          color='#ffa500'
          elevation='2'
          class='primary-text-color'
          @click='showMore'
        >
          Show More
        </v-btn>
        <v-btn
          v-else
          loading
          color='#ffa500'
          elevation='2'
          class='primary-text-color'
        >
          Show More
        </v-btn>
      </v-container>

    </v-col>
  </v-container>
</template>

<script>
import Axios from '@nuxtjs/axios'

export default {
  name: 'posts',
  data: () => ({
    posts: [],
    nextUrl: '',
    moreLoading: false,
    showMoreLoading: true
  }),
  methods: {
    async showMore() {
      if (this.nextUrl) {
        this.moreLoading = true
        const data = await fetch(this.nextUrl).then(res => {
          return res.json()
        })
        data.data.map(item=>{
          this.posts.push(item)
        })
        this.moreLoading = false
      }else {
        this.showMoreLoading = false
      }
    }
  },
  async fetch() {
    const data = await fetch('http://talfigh.ventosco.com/testvue/api/posts').then(res => {
      return res.json()
    })
    this.posts = data.data
    this.nextUrl = data.next_page_url
  }
}
</script>

<style scoped>
.primary-text-color {
  color: #1a1d21 !important;
}
.secondary-text-color {
  color: #ffa500;
}
</style>
