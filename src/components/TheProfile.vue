<template>
  <div class="text-xs-center pa-5">
    <v-avatar size="120px">
      <img class="img-circle elevation-2 mb-1" src="@/assets/images/profile-avatar.png">
    </v-avatar>
    <div class="headline pt-2 black--text">Itzu Chen</div>
    <div class="subheading text-xs-center grey--text pa-2">Hello and welcome to my website!</div>
    <v-layout justify-center>
      <a href="javascript:;" class="body-2 px-2 link_underline">About</a>
      <a href="https://github.com/IsuoChen" target="_blank" class="body-2 px-2 link_underline">GitHub</a>
      <a href="mailto:itzuchen5027@gmail.com" class="body-2 px-2 link_underline">Mail</a>
    </v-layout>
  </div>
</template>
<script>
  export default {
    data: () => ({
    })
  }
</script>
<style scoped>
  .link_underline:hover {
    text-decoration: underline;
  }
</style>