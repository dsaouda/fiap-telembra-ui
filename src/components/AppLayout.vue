<template>
    <v-app id="app" toolbar footer>
        <v-navigation-drawer
            class="pb-0"
            persistent
            clipped
            height="100%"
            light
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
        
        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>      
            <slot name="title"></slot>
        </v-toolbar>
        
        <main>
            <v-container fluid>
                <slot></slot>
            </v-container>
        </main>
        
    </v-app>
</template>

<script>
  export default {
    name: 'app-layout',
    data () {
      return {
        drawer: null
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
