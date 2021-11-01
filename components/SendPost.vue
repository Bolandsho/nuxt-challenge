<template>
  <div>
    <v-card class='mt-5 pa-5'>
    <form @submit.prevent='send'>
      <v-text-field v-model='post.title' outlined label='Post Title' >  </v-text-field>
      <v-text-field v-model='post.description' outlined label='Post Body' >    </v-text-field>
      <v-btn color='primary' type='submit' @submit='send'>send</v-btn>
    </form>
    </v-card>
    <v-container v-if='respond.title' color='accent'  class=' pa-10' >
      <v-card-title class='pink'>Post Successfully sent:</v-card-title>
<v-sheet color='info' class='pa-4'>

      <h4>
        Post Title:
        {{ respond.title }}
      </h4>
        <h4>Post Body:
          {{ respond.description }}
        </h4>
</v-sheet>
    </v-container>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name:'SendPost',
  data(){
    return{
      post:{title:'',description:''},
      show:true
    }
  },
  computed: {
    ...mapGetters({
      respond: 'posts/post'
    })
  },

  methods:{
    send(){
      this.$store.dispatch('posts/sendPost', this.post)
      this.show=true
    }
  }

})
</script>

<style scoped>

</style>
