<template>
  <div
    id="app"
    class="backgroundPetRegisterScreen"
  >
    <v-toolbar
      app
      dense
      clipped-left
      fixed
    >
      <div class="pl-2">
        <v-toolbar-title>
          <span>Pet</span>
          <span class="font-weight-light">CARE</span>
        </v-toolbar-title>
      </div>
      <div class="mr-4">
        <img
          class="ml-2"
          src="../../assets/images/pet-icon-blue.png"
        >
      </div>
    </v-toolbar>
    <v-container
      fill-height
      class="deviceForm"
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <template>
          <div>
            <v-toolbar
              flat
              color="white"
            >
              <v-toolbar-title>Registro do Comedouro</v-toolbar-title>
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >

                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    small
                    color="buttonAdd"
                    dark
                    bottom
                    right
                    absolute
                    v-on="on"
                    @click="dialog = !dialog"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                </template>
                <v-form v-model="valid"  ref="form">
                <v-card>
                  <v-card-title>
                    <span class="headline">Registro de Refeição</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="mealInformations.time"
                            label="Horário"

                          ></v-text-field>
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="mealInformations.quantity"
                            label="Quantidade (g)"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      flat
                      @click="close"
                    >Cancel</v-btn>
                    <v-btn
                      color="blue darken-1"
                      flat
                      @click="addMealList"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="mealList"
              class="elevation-1"
              hide-actions
            >
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.time }}</td>
                <td class="text-xs-center">{{ props.item.quantity }}</td>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
             <v-btn block color="primary dark" @click="addToAPI">Ok</v-btn>
            </div>
          </div>
        </template>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    dialog: false,
    valid: false,
    headers: [
      {
        text: 'Horário',
        align: 'left',
        sortable: false,
        value: 'time',
      },
      {
        text: 'Quantidade (g)',
        align: 'left',
        sortable: false,
        value: 'qtt',
      },
    ],
    editedIndex: -1,
    mealInformations: {
      time: 'hh:mm',
      quantity: 0,
    },
    mealList: [],
    defaultItem: {
      time: 'hh:mm',
      quantity: 0,
    },
  }),

  computed: {
    ...mapGetters([
      'serverUrl', 'userInformation',
    ]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    addMealList() {
      this.mealList.push(this.mealInformations);
      this.dialog = !this.dialog;
      console.log(this.mealList);
    },

    addToAPI() {
      console.log(this.mealList);
      const info = { mealList: this.mealList, userEmail: this.userInformation };

      axios.post(`${this.serverUrl}device/insert`, info)
        .then((res) => {
          this.$router.push('/medicineRegister');
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.mealInformations = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.mealList[this.editedIndex], this.mealInformations);
      } else {
        this.mealList.push(this.mealInformations);
      }
      this.close();
    },
  },
};
</script>
<style>
.backgroundPetRegisterScreen {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url("./../../assets/images/blue-wallpaper.png");
}
.deviceForm {
  opacity: 0.7;
  z-index: -1;
  width: 350px;
  padding-bottom: 100px;
}

.cardTittle {
  font-weight: bold;
  text-align: center;
  font-size: 23px;
  display: inline-block;
}
</style>
