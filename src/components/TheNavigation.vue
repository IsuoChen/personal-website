<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
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
      <v-toolbar-title>Home</v-toolbar-title>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
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
