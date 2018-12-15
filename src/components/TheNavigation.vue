<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list class="pt-5">
        <v-list-tile v-for="item in items" :key="item.title" :to="item.href">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="black" class="elevation-1" fixed dark dense app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="secondary--text">{{ name }}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'Home'
      }
    },
    data: () => ({
      drawer: false,
      items: [
        {
          title: 'Home',
          icon: 'dashboard',
          href: '/'
        },
        {
          title: 'About',
          icon: 'face',
          href: '/about'
        }
      ]
    })
  }
</script>
