<template>
    <v-app id="app" toolbar footer>
        <v-toolbar class="indigo" dark fixed>
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
    name: 'public-layout',
    data () {
      return {
        drawer: null
      }
    }
  }
</script>
