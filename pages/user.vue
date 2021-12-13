<template>
  <v-row>
    <v-overlay absolute :value="alert.show">
      <v-alert
        :value="alert.show"
        :color="!alert.successfull ? 'red' : 'green'"
        class="ma-6"
        transition="scale-transition"
        dismissible
        dense
        @input="alert.show = false"
      >
        {{ alert.successfull ? 'successfully added' : 'validation failed' }}
      </v-alert>
    </v-overlay>
    <v-col class="text-center">
      <v-form ref="form">
        <v-text-field
          v-model="userData.firstname"
          counter="25"
          :rules="emptyRules"
          label="First name"
        ></v-text-field>
        <v-text-field
          v-model="userData.lastname"
          counter="25"
          :rules="emptyRules"
          label="Last name"
        ></v-text-field>
        <v-text-field
          v-model="userData.email"
          label="Email"
          :rules="emailRules"
        ></v-text-field>
        <v-btn @click="submit" elevation="2" block>submit</v-btn>
      </v-form>

      <!-- :rules="rules" -->
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'

const emailRegexValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default Vue.extend({
  data() {
    return {
      alert: {
        show: false,
        successfull: false,
      },
      userData: {
        firstname: '',
        lastname: '',
        email: '',
      },
      emailRules: [
        (v: string) =>
          emailRegexValidation.test(v) || 'email validation failed',
      ],
      emptyRules: [(v: string) => v !== '' || 'cannot be empty'],
    }
  },
  methods: {
    async submit() {
      const isValid = (this.$refs.form as Vue & {
        validate: () => boolean
      }).validate()
      if (isValid) {
        const { firstname, lastname, email } = this.userData
        await this.$store.dispatch('user/SetCredentials', {
          firstname,
          lastname,
          email,
        })
        this.alert.show = true
        this.alert.successfull = true
      } else {
        this.alert.show = true
        this.alert.successfull = false
      }

      setTimeout(() => {
        this.alert.show = false
      }, 3000)
    },
  },
})
</script>