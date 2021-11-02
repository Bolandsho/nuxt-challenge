<template>
  <v-container>
    <v-col cols='12'>
      <v-card color='#ffa500' v-if='showAlert'>
        <v-card-title class='text-h5 mb-3 primary-text-color font-weight-bold'>
          {{ message }}
        </v-card-title>
      </v-card>
      <v-text-field
        label='Title'
        :rules='rules'
        hide-details='auto'
        v-model='title'
      ></v-text-field>
      <v-text-field
        label='description'
        :rules='descriptionRules'
        v-model='description'
      ></v-text-field>
      <v-btn
        v-if='!loading'
        color='#ffa500'
        elevation='2'
        class='primary-text-color mt-3'
        @click='send'
      >
        Send
      </v-btn>
      <v-btn
        v-else
        loading
        color='#ffa500'
        elevation='2'
        class='primary-text-color mt-3'
      >
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'insert',
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 10) || 'Min 10 characters'
    ],
    descriptionRules: [
      value => !!value || 'Required.'
    ],
    loading: false,
    showAlert: false,
    message: '',
    title: '',
    description: ''
  }),
  computed: {
    ...mapGetters({
      post: 'insert/post'
    })
  },
  methods: {
    async send() {
      this.loading = true
      this.$store.dispatch('insert/Insert', [
        {
          title: this.title,
          description: this.description
        }
      ]).then(() => {
        console.log(this.post)
        this.loading = false
        this.showAlert = true
        this.message = 'successfully submitted'
        setTimeout(() => {
          this.showAlert = false
          this.message = ''
        }, 5000)
      })
      // const req = await this.$axios({
      //   url: 'http://talfigh.ventosco.com/testvue/api/savepost',
      //   method: 'post',
      //   data: {
      //     title: this.title,
      //     description: this.description
      //   }
      // })
      // if (req.status === 201){
      //   this.showAlert = true
      //   this.message = 'successfully submitted'
      // }else {
      //   this.showAlert = true
      //   this.message = 'error'
      // }
      // this.loading = false
      // setTimeout(()=>{
      //   this.showAlert = false
      //   this.message = ''
      // },5000)
    }
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
