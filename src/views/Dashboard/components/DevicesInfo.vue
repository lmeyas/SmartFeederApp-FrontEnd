<template>
  <div>
    <v-layout row wrap>
      <v-flex xs4 class="my-2 ml-3">
        <v-card id="devicesCars" class="deviceCard">
          <img src="../../../assets/images/devices/food_logo.png" height="80px">
          <v-divider/>
          <v-card-actions class="pa-3">
            <img src="../../../assets/images/rate_icon/bone_icon_active.png" alt="10%">
            <img src="../../../assets/images/rate_icon/bone_icon_active.png" alt="35%">
            <img src="../../../assets/images/rate_icon/bone_icon_active.png" alt="50%">
            <img src="../../../assets/images/rate_icon/bone_icon_active.png" alt="75%">
            <img src="../../../assets/images/rate_icon/bone_icon_inactive.png" alt="100%">
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4 class="my-2 ml-5">
        <v-card id="devicesCars" class="deviceCard">
          <img src="../../../assets/images/devices/water_logo.png" height="80px">
          <v-divider/>
          <v-card-actions class="pa-3">
            <v-spacer></v-spacer>
            <img src="../../../assets/images/rate_icon/drop_icon_active.png">
            <img src="../../../assets/images/rate_icon/drop_icon_inactive.png">
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    bones: [
      {
        url_active: '../../../assets/images/rate_icon/bone_icon_active.png',
        url_inactive: '../../../assets/images/rate_icon/bone_icon_inactive.png',
      },
    ],
    waterDrop: [
      {
        url_active: '../../../assets/images/rate_icon/drop_icon_active.png',
        url_inactive: '../../../assets/images/rate_icon/drop_icon_inactive.png',
      },
    ],
  }),
};
</script>

<style>
#devicesCars {
  padding: 5px;
  height: 150px;
  width: 150px;
  line-height: 20px;
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  margin: 15px;
  margin-top: -30px;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 25px #aaa;
  border-radius: 10px;
}
</style>
