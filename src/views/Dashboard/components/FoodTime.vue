<template>
  <v-card width="800px">
    <v-toolbar flat color="white">
      <v-toolbar-title>Refeições Programadas</v-toolbar-title>
    </v-toolbar>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1" hide-actions="true">
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
        <td class="text-xs-left">{{ props.item.fat }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: '',
        sortable: false,
      },
      { text: 'Horário', value: 'time', sortable: false },
      { text: 'Porção (g)', value: 'fat', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          time: '08:00',
          fat: 40,
        },
        {
          time: '12:30',
          fat: 50,
        },
        {
          time: '15:00',
          fat: 40,
        },
        {
          time: '18:00',
          fat: 50,
        },
        {
          time: '22:00',
          fat: 40,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm('Are you sure you want to delete this item?')
        && this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style>
</style>
