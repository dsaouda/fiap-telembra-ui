<template>
  <app-layout>
        <span slot="title" class="title">
          Lembretes enviados
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
                <td class="text-xs-center">{{ props.item.dataHoraAgendamento }}</td>
                <td class="text-xs-center">{{ props.item.dataHoraEnvio }}</td>
                <td>{{ props.item.mensagem }}</td>
                <td class="text-xs-center">{{ props.item.totalContatos }}</td>
                <td class="text-xs-center">{{ props.item.statusEnvio }}</td>
                <td class="text-xs-center">{{ props.item.statusMensagem }}</td>                
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
        { text: 'Agendamento', align: 'center', value: 'dataHoraAgendamento' },
        { text: 'Envio', align: 'center', value: 'dataHoraEnvio' },
        { text: 'Mensagem', align: 'left', value: 'mensagem' },
        { text: 'Total contatos que receberam notificação', align: 'center', value: 'totalContatos' },
        { text: 'Status Envio', align: 'center', value: 'statusEnvio' },
        { text: 'Mensagem do Status', align: 'center', value: 'statusMensagem' }
      ],
      items: []
    }
  },
  created: function () {
    axios.get(`http://localhost:8080/lembretes/enviado`).then(response => {
      this.items = response.data
    })
  },
  methods: {
    novo: function () {
      this.$router.push(`/lembrete/novo`)
    },

    deletar: function (lembrete) {
      axios.delete(`http://localhost:8080/lembretes/${lembrete.id}`).then(response => {
        this.$router.go(this.$router.currentRoute)
      })
    }
  }
}
</script>