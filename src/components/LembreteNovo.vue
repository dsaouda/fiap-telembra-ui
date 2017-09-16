<template>
    
    <app-layout>

        <span slot="title" class="title">Lembrete: Novo</span>

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
                    v-model="e3"
                    prepend-icon="event"
                    readonly/>

                <v-date-picker v-model="e3" no-title autosave></v-date-picker>
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
                    v-model="e6"
                    prepend-icon="access_time"
                    readonly/>

                <v-time-picker format="24hr" v-model="e6" autosave></v-time-picker>

            </v-menu>

            <v-select
                label="Clientes"
                v-bind:items="states"
                prepend-icon="face"
                v-model="e7"
                multiple
                chips
                hint="Selecione os clientes que receberão notificado"
                persistent-hint></v-select>
            
            <v-text-field
            name="input-7-1"
            prepend-icon="chat"
            label="Escreva um recado"
            multi-line></v-text-field>

            <v-btn @click="submit">
                <v-icon dark>watch</v-icon>
                agendar
            </v-btn>
        </v-form>

    </app-layout>    
</template>

<script>
export default {
  data () {
    return {
      e3: '2017-09-01',
      menu: false,
      modal: false,
      e6: '00:50',
      menu2: false,
      modal2: false,
      e7: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona'
      ]
    }
  },
  methods: {
    submit: function () {

    }
  }
}
</script>
