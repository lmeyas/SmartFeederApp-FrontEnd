<template>
  <v-card width="800px">
    <v-toolbar flat color="white">
      <v-toolbar-title>Refeições Programadas</v-toolbar-title>
    </v-toolbar>
    <v-data-table :headers="headers" :items="meals" class="elevation-1" hide-actions="true">
      <!--v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      -->
      <template v-slot:items="props">
        <td class="justify-center pl-5">
          <img src="../../../assets/images/food_time/bone_green.png" alt="ucc_payment">
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
  }),

  computed: {
    ...mapGetters([
      'serverUrl', 'userInformation',
    ]),
  },

  mounted() {
    axios.get(`${this.serverUrl}device/retrieve`).then((res) => {
      this.results = res.data;
      console.log(this.results);
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>
<style>
</style>
