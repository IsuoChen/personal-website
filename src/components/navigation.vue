<template>
  <div>
    <v-navigation-drawer class="transparent" v-model="drawer" fixed app>
      <!-- <v-btn small outline fab color="blue" class="navigation_btn">
        <v-icon>list</v-icon>
      </v-btn> -->
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="transparent" flat fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        {
          title: 'vuetify-loader',
          icon: 'dashboard',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          title: 'github',
          icon: 'dashboard',
          href: 'https://github.com/vuetifyjs/vuetify'
        }
      ]
    })
  }
</script>
<style>
  .navigation_btn {
    position: relative;
    left: 240px;
  }
</style>