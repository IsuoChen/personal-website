import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#978486', // #E53935
    secondary: '#DED9DE', // #FFCDD2
    accent: '#FFCF46', // #3F51B5
    'card-chip': '#F7DA93'
  }
})
