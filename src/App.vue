<template>
  <v-app id="app" toolbar footer>
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
