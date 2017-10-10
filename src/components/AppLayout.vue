<template>
    <v-app id="app">
        <v-navigation-drawer
            temporary
            clipped
            absolute
            overflow
            enable-resize-watcher
            app
            v-model="drawer">
            <v-list dense>

                <v-list-tile>              
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                
                    <v-list-tile-content>
                        <router-link to="/home">
                            <v-list-tile-title>home</v-list-tile-title>
                        </router-link>
                    </v-list-tile-content>              
                </v-list-tile>

                <!-- clientes -->
                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                        <v-icon>face</v-icon>
                        </v-list-tile-action>
                    
                        <v-list-tile-content>
                        <v-list-tile-title>pessoas</v-list-tile-title>
                        </v-list-tile-content>
                    
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                
                    <v-list-tile>                    
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/pessoa/novo">
                                    Novo
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>                    
                    </v-list-tile>          

                    <v-list-tile>                    
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/pessoa/todos">
                                    Visualizar todos
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>                    
                    </v-list-tile>
                    
                </v-list-group>

                <!-- lembretes -->
                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>add_alert</v-icon>
                        </v-list-tile-action>
                    
                        <v-list-tile-content>
                            <v-list-tile-title>lembretes</v-list-tile-title>
                        </v-list-tile-content>
                    
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>                      
                            <v-list-tile-title>
                                <router-link to="/lembrete/novo">
                                    Novo
                                </router-link>
                            </v-list-tile-title>                      
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/lembrete/agendados">
                                    Agendados
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/lembrete/enviados">
                                    Enviados
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-tile>              
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                
                    <v-list-tile-content @click="sair">                        
                        <v-list-tile-title>sair</v-list-tile-title>                        
                    </v-list-tile-content>              
                </v-list-tile>

            </v-list>
        
        </v-navigation-drawer>
        
        <v-toolbar class="indigo" dark app absolute clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>                 
            <slot name="title"></slot>
            Fiap Telembra
        </v-toolbar>
        
        <main>
            <v-content>
                <v-container fluid>
                    <v-layout align-center justify-center>
                        <v-flex xs10>
                            <v-card>
                                <v-card-text>
                                    <v-layout row wrap>
                                        <v-flex xs12 md12>                                        
                                            <slot></slot>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>            
        </main>
        
    </v-app>
</template>

<script>
  export default {
    name: 'app-layout',
    data () {
      return {
        drawer: false
      }
    },
    methods: {
      sair: function () {
        this.$router.push('/')
        localStorage.removeItem('token')
      }
    }
  }
</script>
