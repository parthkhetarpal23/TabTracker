<!-- Vue Components.
Every .vue file is seperated into 3 components.
1. <template> </template>
  - used to define html template
  - inside html you can special attr like v-model, v-html, v-<anything> vue specific attr. That is used to bind to <script> tag
2. <script> </script>
  - object that has many diff methods on it
  - data () is you can bind 2way or 1way to the template
  - methods : any type of method that you want to be able to access from your template.

3. <style> </style>
-->
<template>
  <v-app>
    <v-container fill-height fluid dark>
      <v-row align="center" justify="center" dense>
        <v-col
            cols="12"
            sm="8"
            md="4"
          >
          <v-toolbar dense color="cyan">
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
          <v-card class="elevation-12">
            <v-card-text>
              <br>
              <input type ="email" name = "email" v-model="email" placeholder="email"/>
              <br><br>
              <input type = "password" name = "password" v-model="password" placeholder="password"/>
              <br>
              <div class = "error" v-html="error"/>
              <br>
              <v-btn class="blue" @click="register">Register</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      // console.log('register button clicked', this.email, this.password)
      // console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
