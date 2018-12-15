<template>
  <v-layout align-center justify-center fill-height :class="{ 'text-xs-center': true,'progress_container': true, 'loading': isLoading }">
    <v-flex>
      <v-progress-circular class="progress_circular" :width="10" :size="80" color="black" indeterminate></v-progress-circular>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .progress_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255,255,255,0.3);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    &.loading{
      visibility: visible;
      opacity: 1;
    }
  }
</style>