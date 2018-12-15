<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="mb-3">
        <v-btn to="/" color="black" flat><v-icon left>arrow_left</v-icon>Back to prev page</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn></v-btn>
      </v-flex>
      <v-flex xs12>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// @ is an alias to /src

export default {
  components: {

  },
  data: () => ({
  }),
  mounted() {
    this.$store.commit('SetPageName', { name: this.$route.name })
    this.loadDoc(1)
  },
  methods: {
    // loadDoc(page) {
    //   let xhttp
    //   this.$store.commit('LoadingCircular', { isLoading: true })
    //   xhttp = new XMLHttpRequest()
    //   xhttp.onreadystatechange = function() {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //       // cFunction(xhttp);
    //       console.log(JSON.parse(xhttp.response))
    //       console.log(this)
    //       // this.$store.commit('LoadingCircular', { isLoading: false })
    //     }
    //   }
    //   xhttp.open("GET", `https://swapi.co/api/people?page=${ page }`, true);
    //   xhttp.send();
    // },
    
    loadDoc(page) {
      // loading start
      this.$store.commit('LoadingCircular', { isLoading: true })
      this.$http.get(`https://swapi.co/api/people?page=${ page }`)
        .then( res => {
          console.log(res)
        })
        .catch( err => {
          console.log(err)
        })
        .finally(() => {
          // loading end
          this.$store.commit('LoadingCircular', { isLoading: false })
        })
    }
  }
}
</script>
<style scoped>
 * {
   outline: 1px solid red;
 }
</style>
