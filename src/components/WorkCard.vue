<template>
  <div>
    <v-card class="mb-3 black--text" v-for="(item, index) in cards" :key="index">
      <!-- <v-img :src="require(`@/assets/images/${ item.images }`)" aspect-ratio="2.5"></v-img> -->
      <v-card-title primary-title>
        <div>
          <h3 class="headline pb-2" v-html="item.title">{{ item.title }}</h3>
          <v-chip class="ml-0 mr-1 mt-0 caption" small outline color="card-chip" v-for="(chip, index) in item.label" :key="index">{{ chip.text }}</v-chip>
          <div class="subheading py-1">{{ item.subTitle }}</div>
          <div class="body-1">{{ item.description }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" :disabled="item.btnDemo.disabled" :href="item.btnDemo.href" target="_blank">Demo</v-btn>
        <v-btn flat color="primary" :disabled="item.btnGitHub.disabled" :href="item.btnGitHub.href" target="_blank">GitHub</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
  export default {
    props: {
      cards: {
        type: Array,
        default: function () {
          return [{
            images: 'card-future.png',
            label: [
              { text: 'HTML5' }
            ],
            title: 'title',
            subTitle: 'subTitle',
            description: 'description',
            btnDemo: {
              disabled: true,
              href: ''
            },
            btnGitHub: {
              disabled: true,
              href: ''
            }
          }]
        }
      }
    }
  }
</script>
<style>
</style>