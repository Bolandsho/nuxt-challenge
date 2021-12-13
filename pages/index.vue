<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="(post, index) in posts.data" :key="post.id" class="mt-2">
        <v-card-title class="headline">
          {{ post.title }}
        </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="viewPost(index)"> Read More </v-btn>
        </v-card-actions>
      </v-card>
      <v-pagination
        :value="posts.current_page"
        :length="posts.last_page"
        @input="goToPage"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch() {
    const page = this.$route.query.page || 1
    await this.$store.dispatch('posts/getPosts', page)
  },
  methods: {
    viewPost(index: number) {
      this.$router.push({
        path: '/post/' + this.posts.data[index].id,
      })
    },
    goToPage(page: number) {
      this.$router.push({
        name: 'index',
        query: { page: String(page) },
      })
    },
  },
  watch: {
    '$route.query'() {
      const page = this.$route.query.page || 1
      this.$store.dispatch('posts/getPosts', page)
    },
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts',
    }),
  },
})
</script>
