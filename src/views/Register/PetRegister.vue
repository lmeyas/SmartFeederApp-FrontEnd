<template>
  <div id="app" class="backgroundPetRegisterScreen">
    <v-toolbar app dense clipped-left fixed>
      <div class="pl-2">
        <v-toolbar-title>
          <span>Smart</span>
          <span class="font-weight-light">FEEDER</span>
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
                <v-combobox v-model="select" :items="items" chips label="Selecione a espécie">
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
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Nome"
                prepend-icon="person"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="raca"
                :rules="racaRules"
                label="Raça"
                prepend-icon="pets"
                required
                @input="$v.raca.$touch()"
                @blur="$v.raca.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="age"
                :rules="ageRules"
                label="Idade"
                prepend-icon="email"
                required
                @input="$v.age.$touch()"
                @blur="$v.age.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="weight"
                :rules="weightRules"
                label="Peso (kg)"
                prepend-icon="email"
                required
                @input="$v.weight.$touch()"
                @blur="$v.weight.$touch()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="clear">Clear</v-btn>
            <!-- <v-btn block color="primary" @click="submit">Ok</v-btn> -->
            <v-btn block color="primary" to="/deviceRegister">Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },
  data: () => ({
    valid: false,
    name: '',
    items: ['Gato', 'Cachorro'],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    raca: '',
    racaRules: [
      v => !!v || 'Name is required',
      v => v.length <= 3 || 'Name must be less than 3 characters',
    ],
    age: '',
    ageRules: [
      v => !!v || 'Name is required',
      v => v.length <= 1 || 'Name must be less than 1 characters',
    ],
    weight: '',
    weightRules: [
      v => !!v || 'Weight is required',
      v => v.length <= 2 || 'Weight must be less than 2 characters',
    ],
  }),
  methods: {
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
