<template>

    <app-layout>
        <span slot="title" class="title">Pessoa: Novo</span>

        <v-form>
            <v-text-field
                label="Nome"
                v-model="pessoa.nome"                              
                required
                prepend-icon="label"
            ></v-text-field>            

            <v-text-field
                label="Telefone"
                hint="exemplo: (11) 99999-9999"
                persistent-hint
                v-model="pessoa.telefone"                               
                prepend-icon="phone"
                required
            ></v-text-field>   

            <v-btn @click="submit">salvar</v-btn>
            
        </v-form>
    </app-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pessoa: {
        id: null,
        nome: '',
        telefone: ''
      }
    }
  },

  created: function () {
    let pessoa = parseInt(this.$route.query.p)
    if (pessoa) {
      axios.get(`http://localhost:8080/pessoa/${pessoa}`).then(response => {
        this.pessoa = response.data
      })
    }
  },

  methods: {
    submit: function () {
      axios.post(`http://localhost:8080/pessoa`, this.pessoa).then(response => {
        this.$router.push(`/pessoa/todos`)
      })
    }
  }
}
</script>
