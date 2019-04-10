<template>
  <v-app>
    <TopBar/>
    <v-content class="background">
      <v-layout row wrap fill-height fill-width justify-center class="mx-auto">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <devicesInfo/>
            <FoodTime/>
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
import devicesInfo from './components/DevicesInfo.vue';
import FoodTime from './components/FoodTime.vue';

export default {
  components: {
    TopBar,
    BottomNav,
    devicesInfo,
    FoodTime,
  },
};
</script>

<style>
</style>
