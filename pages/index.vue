<template>
  <v-row justify='center' align='center'>
   <div style="float: right;width: 100%">
     <NuxtLink class="btn btn-success" to="/create"  >
       Create Post
     </NuxtLink>
   </div>
    <v-col cols='12' sm='8' md='6'>
      <v-card v-for='post in posts' :key='post.id' class='mt-2'>
        <v-card-title class='headline'>
          {{ post.title }}
        </v-card-title>
        <v-card-text>
          {{ post.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />

            <NuxtLink class="btn btn-success" :to="getHref(post.id)"  >
              Read More
            </NuxtLink>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch() {
    await this.$store.dispatch('posts/getPosts')
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  },
    methods:{
        getHref(id){
            return `post/${id}`;
        }
    }
})
</script>
