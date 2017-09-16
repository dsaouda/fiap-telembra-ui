<template>
    <div>
      <span class="title">
          Olá, seja bem vindo ao FIAP te lembra, aplicação que envia lembretes via telefone celular ou fixo.
      </span>
      
      <v-list two-line>
          <v-subheader>Veja abaixo os próximos lembretes</v-subheader>
          <template v-for="item in items">
              <v-divider/>          
              <v-list-tile @click="">
                  <v-list-tile-avatar>
                      <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
              </v-list-tile>
          </template>
      </v-list>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      items: [
          { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
          { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" }
      ],
      alert: true,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
