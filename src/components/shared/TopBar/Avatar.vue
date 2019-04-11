<template>
  <div>
    <v-avatar size="41px" color="grey lighten-4">
      <!--img :src="this.userPhoto" alt="avatar"-->
      <img src="../../../assets/images/user-eu.png" alt="avatar">
    </v-avatar>
  </div>
</template>

<script>
export default {
  data: () => ({
    userPhoto: '',
    userName: '',
  }),
  beforeMount() {
    this.$electron.ipcRenderer.send('/get/user');
    this.$electron.ipcRenderer.once('/user-result', (event, response) => {
      if (response.status === 200) {
        this.userPhoto = '../assets/images/pet-icon.png';
        this.userName = response.data[0].name;
      }
    });
  },
};
</script>

<style>
.el-dropdown-link-top {
  cursor: pointer;
  color: white;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 16px;
}
</style>
