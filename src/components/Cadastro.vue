<template>
    <public-layout>

      <span slot="title">
        <v-btn @click="$router.push('/')" icon>
            <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        &nbsp;&nbsp;Crie sua conta para usar o sistema
      </span>

      <v-card class="lighten-4 elevation-0">
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Informe o nome da empresa</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  prepend-icon="business"
                  label="Empresa"
                  v-model="cliente.nome"                  
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Informe seu nome</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  prepend-icon="face"
                  label="Nome"
                  v-model="usuario.nome"                     
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Informe seu e-mail para acesso ao sistema</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  prepend-icon="email"
                  v-model="usuario.email"
                  label="Email"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Informe sua senha</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  prepend-icon="vpn_key"
                  label="Senha"
                  hint="Mínimo de 3 caracteres"
                  min="3"              
                  v-model="usuario.senha"              
                  :append-icon="viewPassword ? 'visibility_off' : 'visibility'"
                  :append-icon-cb="() => (viewPassword = !viewPassword)"
                  :type="viewPassword ? 'password' : 'text'"       
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4></v-flex>

              <v-flex xs8>
                <v-btn success class="elevation-0" @click="criarConta">Criar conta</v-btn>
              </v-flex>
            </v-layout>

          </v-container>
        </v-card-text>
      </v-card>
     
    </public-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      viewPassword: true,
      cliente: {nome: ''},
      usuario: {nome: '', email: '', senha: ''}
    }
  },
  methods: {
    criarConta: function () {
      axios.post(`/criar-conta`, {cliente: this.cliente, login: this.usuario}).then(response => {
        this.$router.push('/')
      })
    }
  }
}
</script>
