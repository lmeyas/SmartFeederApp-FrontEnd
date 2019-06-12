<template>
  <v-card width="800px">
    <v-toolbar flat color="white">
      <v-toolbar-title>Refeições Programadas</v-toolbar-title>
    </v-toolbar>
    <v-data-table :headers="headers" :items="meals" class="elevation-1">
      <template v-slot:items="props">
        <td class="justify-center pl-5">
          <img v-if="Number(itsTime) >= Number(props.item.time.replace(':', ''))" src="../../../assets/images/food_time/bone_green.png" alt="ucc_payment">
          <img v-else src="../../../assets/images/food_time/bone_red.png" alt="ucc_payment">
        </td>
        <td class="text-xs-left">{{ props.item.time }}</td>
        <td class="text-xs-left">{{ props.item.quantity }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          No data available.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: '',
        sortable: false,
      },
      { text: 'Horário', value: 'time', sortable: false },
      { text: 'Porção (g)', value: 'quantity', sortable: false },
    ],
    meals: [],
    editedIndex: -1,
    itsTime: '',
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
      this.itsTime = new Date(Date.now()).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3').replace(':', '');

      axios.post(`${this.serverUrl}device/retrieve`, { userEmail: this.userInformation }).then((res) => {
        this.meals = res.data.meal_information;
      }).catch((err) => {
        console.log(err);
      });
    }
  },
};
</script>
<style>
</style>
