<template>
  <v-card class="mb-3">
    <v-img :src="require('@/assets/images/card-future.png')" aspect-ratio="2.5"></v-img>
    <v-card-title primary-title>
      <div>
        <v-chip class="ma-0" small label color="card-chip">HTML5</v-chip>
        <h3 class="title py-2">FUTURE ATLAS <span>未來主題樂園</span></h3>
        <div class="body-2 text--primary">資策會結訓小組專題作品</div>
        <div class="body-2">主要負責: 導引頁、Loading程式、轉場程式、首頁第一屏、導覽列、設施介紹、設施購票、設施前後台資料串接、後台設施管理、後台諮詢管理</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="accent" href="http://140.115.236.72/demo-personal/BD103/web/C1700339/index/" target="_blank">Demo</v-btn>
      <v-btn outline color="accent" href="https://github.com/chou0728/future-atlas" target="_blank">GitHub</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props: {
      card: {
        type: Array,
        default: function () {
          return [{
            images: '@/assets/images/card-future.png',
            label: [
              { color: 'card-chip', text: 'HTML5'}
            ],
            title: 'Title',
            subTitle: 'SubTitle',
            description: 'description'
          }]
        }
      }
    },
    data: () => ({
    })
  }
</script>
<style>
</style>