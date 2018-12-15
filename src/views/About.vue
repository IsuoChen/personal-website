<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center class="text-xs-center">
      <v-flex xs12>
        <v-icon style="font-size: 36px;" class="inline_middle">sentiment_satisfied</v-icon>
        <span class="inline_middle title pl-3">Coming Soon!</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style lang="scss">
  .inline_middle {
    display: inline-block;
    vertical-align: middle;
  }
</style>
<script>
  export default {
    mounted() {
      this.$store.commit('SetPageName', { name: this.$route.name })
    }
  }
</script>