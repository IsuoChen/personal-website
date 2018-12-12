<template>
  <v-app>
    <v-content>
      <TheNavigation/>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: {
    TheNavigation
  }
}
</script>
<style lang="scss">
@import '@/assets/css/common.scss';
/* *{
  outline: 1px solid red;
} */
</style>