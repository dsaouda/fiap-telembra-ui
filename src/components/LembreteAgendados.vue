<template>
  <app-layout>
        <span slot="title" class="title">
          Lembretes agendados
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
                <td>{{ props.item.dataHoraEnvio }}</td>
                <td>{{ props.item.mensagem }}</td>
                <td>{{ props.item.totalContatos }}</td>
                <td class="text-xs-right">
                    <v-btn title="cancelar envio" @click="deletar(props.item)" icon class="black--text text--lighten-2">
                      <v-icon>delete_forever</v-icon>                            
                    </v-btn>
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
        { text: 'Data/Hora para o envio', align: 'center', value: 'dataHoraEnvio' },
        { text: 'Mensagem', align: 'center', value: 'mensagem' },
        { text: 'Total contatos afetados', align: 'center', value: 'totalContatos' }
      ],
      items: []
    }
  },
  created: function () {
    axios.get(`/lembretes/nao-enviado`).then(response => {
      this.items = response.data
    })
  },
  methods: {
    novo: function () {
      this.$router.push(`/lembrete/novo`)
    },

    deletar: function (lembrete) {
      axios.delete(`/lembretes/${lembrete.id}`).then(response => {
        this.$router.go(this.$router.currentRoute)
      })
    }
  }
}
</script>
