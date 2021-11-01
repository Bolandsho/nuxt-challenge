<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="item in list" :key="item.id" class="mt-2">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.descriptions }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" :to="'/user/' + item.id"> Read more </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    list: [],
  }),
  async fetch() {
    const data = await this.$axios.get(
      'http://talfigh.ventosco.com/testvue/api/posts'
    )
    this.list = data.data.data.map((x) => ({
      id: x.id,
      title: x.title,
      descriptions: x.description,
    }))
  },
}
</script>
