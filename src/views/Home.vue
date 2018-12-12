<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-space-around>
      <v-flex xs12 md4 lg3>
        <TheProfile/>
      </v-flex>
      <v-flex xs12 md7 lg6>
        <v-layout justify-center class="card_container">
          <v-flex xs10 md9 lg9>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
          </v-flex>
        </v-layout>
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
