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
              <v-toolbar-title>Registro do Medicamentos</v-toolbar-title>
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
                    <span class="headline">Registro de Medicamento</span>
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
                            v-model="medicineInformations.name"
                            label="Nome do medicamento"

                          ></v-text-field>
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="medicineInformations.lastApp"
                            label="Última aplicação"
                          ></v-text-field>
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="medicineInformations.nextApp"
                            label="Próxima aplicação"
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
                      @click="addMedicineList"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="medicineList"
              class="elevation-1"
              hide-actions
            >
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.lastApp }}</td>
                <td class="text-xs-center">{{ props.item.nextApp }}</td>
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
        text: 'Nome',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Última aplicação',
        align: 'left',
        sortable: false,
        value: 'lastApp',
      },
      {
        text: 'Próxima Aplicação',
        align: 'left',
        sortable: false,
        value: 'nextApp',
      },
    ],
    editedIndex: -1,
    medicineInformations: {
      name: '',
      lastApp: 'dd/mm/aaaa',
      nextApp: 'dd/mm/aaaa',
    },
    medicineList: [],
    defaultItem: {
      name: '',
      lastApp: 'dd/mm/aaaa',
      nextApp: 'dd/mm/aaaa',
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
    addMedicineList() {
      this.medicineList.push(this.medicineInformations);
      this.dialog = !this.dialog;
      console.log(this.medicineList);
    },

    addToAPI() {
      console.log(this.medicineList);
      const info = { medicineList: this.medicineList, userEmail: this.userInformation };

      axios.post(`${this.serverUrl}medicine/insert`, info)
        .then((res) => {
          // COLOCAR AQUI A PARTE DE IR PRA PROXIMA PAGINA
          this.$router.push('/dashboard');
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.medicineInformations = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.medicineList[this.editedIndex], this.medicineInformations);
      } else {
        this.medicineList.push(this.medicineInformations);
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
