<template>
  <v-app id="app" class="white">
    <v-content>
      <router-view/>
      <LoadingCircular :isLoading="isLoading" />
      <TheNavigation :name="name" />
    </v-content>
  </v-app>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import LoadingCircular from '@/components/LoadingCircular.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TheNavigation,
    LoadingCircular
  },
  computed: {
    ...mapState({
      isLoading: state => {
        return state.isLoading
      },
      name: state => {
        return state.pageName
      }
    })
  }
}
</script>
<style lang="scss">
@import '@/assets/css/common.scss';
/* *{
  outline: 1px solid red;
} */
  // #app {
  //   background-image: url('./assets/images/background.jpg');
  // }
</style>