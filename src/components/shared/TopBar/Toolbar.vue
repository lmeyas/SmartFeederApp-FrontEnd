<template>
  <v-toolbar app dense clipped-left fixed>
    <div class="pl-2">
      <v-toolbar-title>
        <span>Pet</span>
        <span class="font-weight-light">CARE</span>
      </v-toolbar-title>
    </div>
    <div class="mr-4">
      <img class="ml-2" src="../../../assets/images/pet-icon-blue.png">
    </div>
    <v-spacer></v-spacer>
    <avatar/>
  </v-toolbar>
</template>
<script>
import avatar from './Avatar.vue';

export default {
  name: 'App',
  components: {
    avatar,
  },
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
        color: 'primary',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
        color: 'secondary',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
};
</script>
