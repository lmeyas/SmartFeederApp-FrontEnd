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
          <v-card-title class="cardTittle">Registo do Comedouro</v-card-title>
          <v-card-text>
            <v-form>
              <p>Refeições cadastradas</p>
              <!-- <v-slider v-model="value" :max="10" persistent-hint step="1" thumb-label ticks></v-slider>
              <v-btn block color="primary" to="/dashboard">Ok</v-btn>-->
              <v-btn
                fab
                small
                color="buttonAdd"
                dark
                bottom
                right
                absolute
                @click="dialog = !dialog"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-text>
                <p>Cadastro de Refeição</p>
                <v-text-field label="Quatidade de ração (g)"></v-text-field>
                <v-text-field label="Horário da Refeição"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="dialog = false">ADD</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
    dialog: false,
    time: '',
    timeRules: [
      v => !!v || 'Hora é obrigatório',
      v => v.length <= 2 || 'Hora must be less than 2 characters',
    ],
    valid: false,
    qtd: '',
    qtdRules: [
      v => !!v || 'Quantidade é obrigatório',
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
