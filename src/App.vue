<template>
  <v-app>
    <v-content>
      <Navigation/>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from '@/components/navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>
<style>
/* *{
  outline: 1px solid red;
} */
</style>
