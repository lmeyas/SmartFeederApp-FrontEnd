<template>
  <div id="app" class="backgroundPetRegisterScreen">
    <v-toolbar app dense clipped-left fixed>
      <div class="pl-2">
        <v-toolbar-title>
          <span>Pet</span>
          <span class="font-weight-light">CARE</span>
        </v-toolbar-title>
      </div>
      <div class="mr-4">
        <img class="ml-2" src="../../assets/images/pet-icon-blue.png">
      </div>
    </v-toolbar>
    <v-container fill-height class="petForm">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title class="cardTittle">Registo do Animal</v-card-title>
          <v-card-text>
            <v-form>
              <v-flex xs12>
                <v-combobox v-model="petInformations.specie" :items="items" chips label="Selecione a espécie">
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.selected"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @click.stop="data.parent.selectedIndex = data.index"
                      @input="data.parent.selectItem(data.item)"
                    >
                      <v-avatar class="accent white--text">{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-text-field
                v-model="petInformations.name"
                :rules="nameRules"
                :counter="10"
                label="Nome"
                prepend-icon="person"
                required
              ></v-text-field>
              <v-text-field
                v-model="petInformations.breed"
                :rules="breedRules"
                label="Raça"
                prepend-icon="pets"
                required
              ></v-text-field>
              <v-text-field
                v-model="petInformations.age"
                :rules="ageRules"
                label="Idade"
                prepend-icon="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="petInformations.weight"
                :rules="weightRules"
                label="Peso (kg)"
                prepend-icon="email"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="clear">Clear</v-btn>
            <!-- <v-btn block color="primary" @click="addToAPI">Ok</v-btn> -->
            <v-btn block color="primary" @click='addToAPI'>Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    valid: false,
    name: '',
    items: ['Gato', 'Cachorro'],
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => v.length >= 2 || 'Nome deve ter pelo menos 2 caracteres',
    ],
    breed: '',
    breedRules: [
      v => !!v || 'Raça é obrigatório',
      v => v.length >= 2 || 'Raça deve ter pelo menos 2 caracteres',
    ],
    age: '',
    ageRules: [
      v => !!v || 'Idade é obrigatório',
      v => v.length >= 1 || 'Idade deve ter pelo menos 1 caracteres',
    ],
    weight: '',
    weightRules: [
      v => !!v || 'Peso é obrigatório',
      v => v.length >= 1 || 'Peso deve ter pelo menos 1 caracteres',
    ],
    petInformations: {
      specie: '',
      name: '',
      breed: '',
      age: '',
      weight: '',
    },
  }),
  computed: {
    ...mapGetters([
      'serverUrl', 'userInformation',
    ]),
  },
  methods: {
    addToAPI() {
      console.log(this.petInformations);
      const info = { petInformations: this.petInformations, userEmail: this.userInformation };
      axios.post(`${this.serverUrl}pet/insert`, info)
        .then((res) => {
          // COLOCAR AQUI A PARTE DE IR PRA PROXIMA PAGINA
          this.$router.push('/deviceRegister');
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.password = '';
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
.petForm {
  opacity: 0.7;
  z-index: -1;
  width: 350px;
  padding-bottom: 100px;
}
.cardTittle {
  font-weight: bolder;
  text-align: center;
  font-size: 23px;
  display: inline-block;
}
</style>
