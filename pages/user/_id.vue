<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-2">
        <div v-if="$fetchState.pending" class="pa-5">
          <v-data-table
            item-key="name"
            class="elevation-1"
            loading
            loading-text="Loading... Please wait"
          ></v-data-table>
        </div>
        <div v-else-if="$fetchState.error">error</div>
        <div v-else>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ description }}</v-card-text>
          <v-card-text>created: {{ created }}</v-card-text>
          <v-card-text>updated: {{ updated }}</v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: '',
    description: '',
    created: '',
    updated: '',
  }),
  async fetch() {
    const data = await this.$axios.get(
      'http://talfigh.ventosco.com/testvue/api/post/' + this.$route.params.id
    )
    this.title = data.data.title
    this.description = data.data.description
    this.created = data.data.created_at.substr(0, 10)
    this.updated = data.data.updated_at.substr(0, 10)
  },
}
</script>
