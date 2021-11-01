<template>
  <v-container>
    <v-card color='#ffa500'
            dark
            class='py-3 px-3 mt-3'
            shaped
            elevation='2'>
      <v-card-title class='text-h5 primary-text-color font-weight-bold'>
        {{ title }}
      </v-card-title>
      <v-card-text class='primary-text-color font-weight-medium'>
        {{ description }}
      </v-card-text>
      <v-card-text class='primary-text-color font-weight-medium'>
        created: {{ created }}
      </v-card-text>
      <v-card-text class='primary-text-color font-weight-medium'>
        updated: {{ updated }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: '_id',
  data: () => ({
    title: '',
    description: '',
    created: '',
    updated: ''
  }),
  async fetch() {
    const data = await fetch('http://talfigh.ventosco.com/testvue/api/post/' + this.$route.params.id).then(res => {
      return res.json()
    })
    this.title = data.title
    this.description = data.description
    this.created = new Date(data.created_at).toDateString()
    this.updated = new Date(data.updated_at).toDateString()
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
