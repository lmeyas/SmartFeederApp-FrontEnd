<template>
  <div>
    <v-layout row wrap>
      <v-flex class="my-2 ml-3">
        <v-card v-for="medicine in medicines" :key="medicine.id" id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">{{ medicine.name }}</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">{{ medicine.lastApp }}</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">{{ medicine.nextApp }}</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    medicines: [],
  }),

  computed: {
    ...mapGetters([
      'serverUrl', 'userInformation',
    ]),
  },

  mounted() {
    if (this.userInformation === '') {
      this.$router.push('/');
    } else {
      axios.post(`${this.serverUrl}medicine/retrieve`, { userEmail: this.userInformation }).then((res) => {
        console.log(this.medicines);
        this.medicines = res.data.medicine_information;
      }).catch((err) => {
        console.log(err);
      });
    }
  },
};
</script>

<style>
#medicineCard {
  padding: 5px;
  height: 150px;
  width: 250px;
  line-height: 20px;
  font-weight: normal;
  text-align: center;
  margin: 0px;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 25px #aaa;
  border-radius: 10px;
}

.textFont {
  font-size: 1em;
}
</style>
