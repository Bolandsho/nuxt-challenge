<template>
  <v-container  >
      <v-row v-if='posts.data'>
        <v-col v-for='(post,k) in posts.data' :key='k' cols='12' sm='8' md='6'>
          <v-card class='mt-5'>
            <v-card-title class='headline'>
              {{ post.title }}
            </v-card-title>
            <v-card-text>
              {{ post.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn :to='`posts/${post.id}`' color='primary'>
                Read More
              </v-btn>

            </v-card-actions>
          </v-card>

        </v-col>

      </v-row>
      <v-container v-else class='red'>
        check your connection and try again
      </v-container>


  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name:'GetPosts',
// props:{postArray:{type:[Object,Array],default(){return null}}},
  data(){
    return{loading:true}
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  }
})
</script>
