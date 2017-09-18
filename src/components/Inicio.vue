<template>
    <public-layout>

      <span slot="title" class="title">
        
      </span>

       <v-parallax src="/static/stock-vector-human-hand-holds-smart-phone-with-messenger-app-flat-illustration-of-people-using-gadgets-walking-554215081.jpg">

          <v-layout column align-center justify-center>
            <h1 style="padding: 4px; background-color: #222;" class="white--text">telembra</h1>
            <h4 style="padding: 4px; background-color: #222;" class="white--text">Envie notificação/lembrete aos seus clientes via telefone</h4>

            <v-btn round primary dark @click="$router.push('/cadastro')">Cadastrar</v-btn>
            ou
            <v-btn round primary dark @click="$router.push('/login')">Entrar</v-btn>  

          </v-layout>

       </v-parallax>

      
     
    </public-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>