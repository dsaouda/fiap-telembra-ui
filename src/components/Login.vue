<template>
    <public-layout>

      <span slot="title">
        <v-btn @click="$router.push('/')" icon>
            <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        &nbsp;&nbsp;Por favor efetue login
      </span>

      <v-form>
            <v-text-field
                label="Login"
                v-model="login.email"
                prepend-icon="email"
            ></v-text-field>            

           <v-text-field
              prepend-icon="vpn_key"              
              label="Senha"
              hint="Mínimo de 3 caracteres"
              min="3"              
              v-model="login.senha"              
              :append-icon="viewPassword ? 'visibility_off' : 'visibility'"
              :append-icon-cb="() => (viewPassword = !viewPassword)"
              :type="viewPassword ? 'password' : 'text'"       
            ></v-text-field>

            <v-btn @click="logar">Login</v-btn>
            
        </v-form>
        
        <v-snackbar                  
          error
          v-model="snackbar">
          {{ snackbarText }}
          <v-btn dark flat @click.native="snackbar = false">fechar</v-btn>
        </v-snackbar>

    </public-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      snackbarText: '',
      snackbar: false,
      viewPassword: true,
      login: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    logar: function () {
      this.snackbar = false
      axios.post(`http://localhost:8080/login`, this.login).then(response => {
        sessionStorage.setItem('token', response.data.token)
        this.$router.push('/home')
      }).catch(error => {
        this.snackbar = true
        this.snackbarText = error.response.data
      })
    }
  }
}
</script>
