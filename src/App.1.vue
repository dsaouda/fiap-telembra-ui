<template>
  <v-app id="app" toolbar footer>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      overflow
      absolute
    >
        <v-list dense>
          
            <v-list-tile>              
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                  
                    <v-list-tile-content>
                        <router-link to="/">
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
                      <v-list-tile-title>clientes</v-list-tile-title>
                    </v-list-tile-content>
                  
                    <v-list-tile-action>
                        <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

              
                <v-list-tile>                    
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link to="/cliente/novo">
                                Novo
                            </router-link>
                        </v-list-tile-title>
                    </v-list-tile-content>                    
                </v-list-tile>          

                <v-list-tile>                    
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link to="/cliente/todos">
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

        </v-list>
      
    </v-navigation-drawer>
    
    <v-toolbar class="indigo" dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>      
      <span style="margin-right: 10px;">Fiap te lembra</span>
      <v-icon style="color: #fff">perm_phone_msg</v-icon>
    </v-toolbar>
    
    <main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </main>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null
      }
    }
  }
</script>
