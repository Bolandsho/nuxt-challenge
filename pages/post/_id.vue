<template>
  <dir>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>{{ post.updated }}</div>
        <p class="text-h4 text--primary">{{ post.title }}</p>

        <div class="text--primary">
          {{ post.description }}
        </div>
      </v-card-text>
    </v-card>
  </dir>
</template>

<script lang='ts'>
import Vue from 'vue'
import { SinglePost } from '@/data/models/post'

export default Vue.extend({
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get<SinglePost>(
      'http://talfigh.ventosco.com/testvue/api/post/' + route.params.id
    )
    const d = new Date(data.updated_at)

    const newUpdatedAt: string = d.getFullYear() + ',' + d.getMonth()

    const post = { ...data, updated: newUpdatedAt }
    return { post }
  },
})
</script>

<style>
</style>