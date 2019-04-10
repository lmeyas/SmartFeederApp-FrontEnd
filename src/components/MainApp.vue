<template>
  <v-app>
    <TopBar/>
    <v-content class="background">
      <v-layout row wrap fill-height fill-width justify-center class="mx-auto">
        <router-view/>
      </v-layout>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import TopBar from './shared/TopBar/Toolbar.vue';
import BottomNav from './shared/BottomNav/BottomMenu.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    BottomNav,
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style>
</style>
