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
    <v-container fill-height class="deviceForm">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title class="cardTittle">Registo do Dispositivo</v-card-title>
          <v-card-text>
            <v-form>
              <p>Número de Refeições</p>
              <v-slider v-model="value" :max="10" persistent-hint step="1" thumb-label ticks></v-slider>
              <v-btn block color="primary" to="/dashboard">Ok</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
    <v-layout row wrap fill-height fill-width justify-center class="mx-auto">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :rules="timeRules"
                label="Horário"
                prepend-icon="alarm"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="qtdRules"
                label="Quantidade"
                prepend-icon="restaurant"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="clear">Clear</v-btn>
            <!-- <v-btn block color="primary" @click="submit">Ok</v-btn> -->
            <v-btn block color="primary" to="/dashboard">Ok</v-btn>
          </v-card-actions>
        </v-layout>
      </v-container>
    </v-layout>
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
    time: '',
    timeRules: [
      v => !!v || 'Hora  é obrigatório',
      v => v.length <= 2 || 'Hora must be less than 2 characters',
    ],
    valid: false,
    qtd: '',
    qtdRules: [
      v => !!v || 'Quantidade  é obrigatório',
      v => v.length <= 2 || 'Quantidade must be less than 2 characters',
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
