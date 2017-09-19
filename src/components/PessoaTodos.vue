<template>

    <app-layout>
        <span slot="title" class="title">
          Listagem de pessoas
        </span>
        
        <v-btn @click="novo()" class="pink" dark fixed bottom right fab>
          <v-icon>add</v-icon>
        </v-btn> 

        <v-data-table
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" scope="props">                
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.telefone }}</td>
                <td class="text-xs-right">
                    <v-menu bottom right>
                      <v-btn icon slot="activator" >
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                      
                      <v-list>
                        <v-list-tile>
                          <v-btn @click="editar(props.item)" icon class="black--text text--lighten-2">
                            <v-icon>edit</v-icon>
                          </v-btn>
                          Editar
                        </v-list-tile>

                        <v-list-tile>
                          <v-btn @click="deletar(props.item)" icon class="black--text text--lighten-2">
                            <v-icon>delete_forever</v-icon>                            
                          </v-btn>
                          Deletar                          
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                </td>
            </template>
        </v-data-table>
        
    </app-layout>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        headers: [
          { text: 'Nome', align: 'left', value: 'nome' },
          { text: 'Email', align: 'left', value: 'telefone' }
        ],
        items: []
      }
    },

    created: function () {
      axios.get(`http://localhost:8080/pessoa`).then(response => {
        this.items = response.data
      })
    },

    methods: {
      novo: function () {
        this.$router.push(`/pessoa/novo`)
      },

      editar: function (pessoa) {
        this.$router.push(`/pessoa/novo?p=${pessoa.id}`)
      },

      deletar: function (pessoa) {
        axios.delete(`http://localhost:8080/pessoa/${pessoa.id}`).then(response => {
          this.$router.go(this.$router.currentRoute)
        })
      }
    }
  }
</script>
