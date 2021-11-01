<template>
<div>
  <get-posts></get-posts>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import GetPosts from '~/components/GetPosts.vue'
export default Vue.extend({
  components: { GetPosts },
  async fetch() {
    await this.$store.dispatch('posts/getPosts')
  },
})
</script>
