<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12 md4 lg3>
        <TheProfile/>
      </v-flex>
      <v-flex xs12 md7 lg8>
        <div class="card_container">
          <br><br><br><br><br><br><br><br><br><br>
          <br><br><br><br><br><br><br><br><br><br>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import TheProfile from '@/components/TheProfile.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'home',
  components: {
    TheProfile,
    WorkCard
  }
}
</script>
<style>
  .card_container {
    height: 550px;
    overflow-y: scroll;
  }
</style>
