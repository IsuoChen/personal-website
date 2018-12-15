<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md4 lg3>
        <TheProfile/>
      </v-flex>
      <v-flex xs12 md7 lg6 class="py-3">
        <v-layout justify-center class="card_container">
          <v-flex xs10 md8 lg7>
            <WorkCard :cards="cards"/>
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
  },
  data: () => ({
    cards: [{
      label: [
        { text: 'Vue.js' },
        { text: 'VueX' },
        { text: 'Vuetify' },
        { text: 'D3.js' },
        { text: 'Ajax' }
      ],
      date: 'December, 2018',
      title: '<span>Practice Ajax</span>',
      subTitle: '練習串接API, 使用Ajax/vue-resource',
      description: '串接資料後製作table及圖表, D3 BarChart 部分未完成',
      btnDemo: {
        disabled: false,
        href: '/practice-ajax',
        target: '_self'
      },
      btnGitHub: {
        disabled: false,
        href: 'https://github.com/IsuoChen/personal-website/blob/master/src/views/PracticeAjax.vue'
      }
    },
    {
      label: [
        { text: 'HTML5' },
        { text: 'CSS3' },
        { text: 'JavaScript' },
        { text: 'JQuery' },
        { text: 'AJAX' },
        { text: 'PHP' }
      ],
      date: 'February, 2018',
      title: 'FUTURE ATLAS <span>未來主題樂園</span>',
      subTitle: '資策會結訓小組專題作品',
      description: '主要負責: 導引頁、Loading程式、轉場程式、首頁第一屏、導覽列、設施介紹、設施購票、設施前後台資料串接、後台設施管理、後台諮詢管理',
      btnDemo: {
        disabled: false,
        href: 'http://140.115.236.72/demo-projects/BD103/BD103G3/home.php',
        target: '_blank'
      },
      btnGitHub: {
        disabled: false,
        href: 'https://github.com/chou0728/future-atlas'
      }
    },
    {
      label: [
        { text: 'HTML5' },
        { text: 'CSS3' },
        { text: 'JQuery' }
      ],
      date: 'December, 2017',
      title: '<span>四季織精品服飾店</span>',
      subTitle: '資策會結訓個人靜態作品',
      description: 'RWD手刻',
      btnDemo: {
        disabled: false,
        href: 'http://140.115.236.72/demo-personal/BD103/web/C1700339/index/',
        target: '_blank'
      },
      btnGitHub: {
        disabled: true,
        href: ''
      }
    }]
  }),
  mounted() {
    this.$store.commit('SetPageName', { name: this.$route.name })
  }
}
</script>
<style scoped>
  .card_container {
    height: 600px;
    overflow-y: scroll;
  }
</style>
