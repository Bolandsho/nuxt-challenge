<template>
  <v-container  >
        <v-card class='mt-5'>
          <get-post></get-post>
        </v-card>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import GetPost from '~/components/GetPost.vue'
export default Vue.extend({
  components: { GetPost },
  async fetch() {
  await this.$store.dispatch('posts/getPost',this.$route.params.id)
  },
})
</script>
