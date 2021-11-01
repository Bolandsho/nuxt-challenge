<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-5">
        <v-card-title> create post </v-card-title>
        <v-form ref="rest">
          <v-text-field
            v-model="title"
            :counter="20"
            :rules="title_check"
            label="Title"
            required
          >
          </v-text-field>
          <v-text-field v-model="description" label="description" required>
          </v-text-field>
        </v-form>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="sendData">
            Save post
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar
        v-model="sucssSendData.snackbar"
        :timeout="3000"
        top
        color="success"
        content-class="text-center"
        rounded="pill"
        centered
      >
        {{ sucssSendData.text }}
      </v-snackbar>
      <v-snackbar
        v-model="erorrData.snackbar"
        :timeout="3000"
        top
        color="red"
        content-class="text-center"
        rounded="pill"
        centered
      >
        {{ erorrData.text }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title_check: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    title: '',
    description: '',
    sucssSendData: {
      snackbar: false,
      text: 'post created',
    },
    erorrData: {
      snackbar: false,
      text: 'Please enter information correctly  ',
    },
  }),

  methods: {
    async sendData() {
      try {
        const req = await this.$axios({
          url: 'http://talfigh.ventosco.com/testvue/api/savepost',
          method: 'post',
          data: {
            title: this.title,
            description: this.description,
          },
        })
        if (req.statusText === 'Created') {
          this.sucssSendData.snackbar = true
          this.$refs.rest.reset()
        }
      } catch (e) {
        this.erorrData.snackbar = true
      }
    },
  },
}
</script>
