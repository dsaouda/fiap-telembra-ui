<template>
    <app-layout>

      <span slot="title" class="title">Home</span>

      <span class="title">
          Olá, seja bem vindo ao FIAP telembra.
      </span>

      <br><br>

      <p>
        Aplicação que envia lembretes via telefone celular ou fixo.
      </p>

      <p>
        Clique no menu ao lado para iniciar a utilização do sistema.
      </p>
     
    </app-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  created: function () {
    axios.defaults.headers.common['x-api-key'] = localStorage.getItem('token')
  }
}
</script>
