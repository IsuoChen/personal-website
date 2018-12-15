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
        { text: 'HTML5' },
        { text: 'CSS3' },
        { text: 'D3.js' }
      ],
      title: '<span>title</span>',
      subTitle: 'subTitle',
      description: 'description',
      btnDemo: {
        disabled: false,
        href: '/practice-ajax',
        target: '_self'
      },
      btnGitHub: {
        disabled: true,
        href: ''
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
