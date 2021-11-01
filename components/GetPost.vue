<template>
  <v-container  >
    <v-card v-if='post.title'>
      <v-card-title>
        {{post.title}}
      </v-card-title>
      <v-card-text>
        {{post.description}}
      </v-card-text>
    </v-card>
    <v-container v-else class='red'>
      check your connection and try again
    </v-container>
  </v-container>

</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name:'GetPost',
// props:{postArray:{type:[Object,Array],default(){return null}}},
  computed: {
    ...mapGetters({
      post: 'posts/post'
    })
  }
})
</script>
