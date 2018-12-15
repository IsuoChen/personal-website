<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="mb-4">
        <v-btn to="/" color="black" flat><v-icon left>arrow_left</v-icon>Back to prev page</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn disabled="">table</v-btn>
        <v-btn>chart</v-btn>
      </v-flex>
      <!-- data-table -->
      <v-flex xs12 class="pa-2">
        <v-data-table :headers="headers" :items="characters" hide-actions class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.height }}</td>
            <td>{{ props.item.mass }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
  components: {

  },
  data: () => ({
    headers: [
      {
        text: 'Character Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Height', value: 'height' },
      { text: 'Mass', value: 'mass' }
    ],
    characters: []
  }),
  mounted() {
    this.$store.commit('SetPageName', { name: this.$route.name })
    this.loadDoc(1)
  },
  beforeDestroy() {
    this.$store.commit('LoadingCircular', { isLoading: false })
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
          this.characters = res.body.results
        })
        .catch( err => {
          // 待做處理
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
</style>
