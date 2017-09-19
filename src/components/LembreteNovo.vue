<template>
    
    <app-layout>

        <span slot="title" class="title">Novo lembrete</span>

        <v-form>
            <v-menu
                lazy
                :close-on-content-click="false"
                v-model="menu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-left="40"
                max-width="290px">
                
                <v-text-field
                    slot="activator"
                    label="Data da notificação"
                    v-model="lembrete.data"
                    prepend-icon="event"
                    readonly/>

                <v-date-picker v-model="lembrete.data" no-title autosave></v-date-picker>
            </v-menu>

            <v-menu
                lazy
                :close-on-content-click="false"
                v-model="menu2"
                transition="scale-transition"
                offset-y
                :nudge-left="40">

                <v-text-field
                    slot="activator"
                    label="Hora da notificação"
                    v-model="lembrete.hora"
                    prepend-icon="access_time"
                    readonly/>

                <v-time-picker format="24hr" v-model="lembrete.hora" autosave></v-time-picker>

            </v-menu>

            <v-select
                label="Pessoas notificadas"
                v-bind:items="pessoas"
                prepend-icon="face"
                v-model="lembrete.pessoas"
                multiple
                chips
                no-data-text="Nenhum resultado"
                item-text="nome"
                item-value="id"
                hint="Selecione os clientes que receberão notificado"
                persistent-hint></v-select>
            
            <v-text-field
                v-model="lembrete.mensagem"
                prepend-icon="chat"
                label="Escreva um recado"
                multi-line></v-text-field>

            <v-btn @click="criarLembrete">
                <v-icon dark>watch</v-icon>
                agendar
            </v-btn>
        </v-form>

    </app-layout>    
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      lembrete: {
        pessoas: [],
        mensagem: null,
        data: null,
        hora: null
      },
      menu: false,
      modal: false,
      menu2: false,
      modal2: false,
      pessoas: []
    }
  },
  created: function () {
    axios.get(`/pessoa`).then(response => {
      this.pessoas = response.data
    })
  },

  methods: {
    criarLembrete: function () {
      axios.post(`/lembretes`, this.lembrete).then(response => {
        this.$router.push(`/lembrete/agendados`)
      })
    }
  }
}
</script>
