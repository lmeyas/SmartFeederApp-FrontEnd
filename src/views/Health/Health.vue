<template>
  <v-app>
    <TopBar/>
    <v-content class="background">
      <v-layout row wrap fill-height fill-width justify-center class="mx-auto">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <Health/>
          </v-layout>
        </v-container>
      </v-layout>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import TopBar from '../../components/shared/TopBar/Toolbar.vue';
import BottomNav from '../../components/shared/BottomNav/BottomMenu.vue';
import Health from './components/MediciceInfo.vue';

export default {
  components: {
    TopBar,
    BottomNav,
    Health,
  },
};
</script>

<style>
</style>
