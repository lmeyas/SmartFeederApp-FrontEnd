<template>
  <v-bottom-nav app :active.sync="bottomNav" :value="true" fixed color="sidebar" dark>
    <v-btn color="secondary" flat value="Dashboard" to="/dashboard">
      <span>Dashboard</span>
      <v-icon>dashboard</v-icon>
    </v-btn>

    <v-btn color="secondary" flat value="Saúde" to="/health">
      <span>Saúde</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <!-- <v-btn color="secondary" flat value="Settings" to="/settings">
      <span>Settings</span>
      <v-icon>settings</v-icon>
    </v-btn> -->
  </v-bottom-nav>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
