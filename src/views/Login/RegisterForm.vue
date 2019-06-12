<template>
  <div id="app" class="backgroundImage">
    <v-container fill-height class="form">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userInformations.name"
                :rules="nameRules"
                label="Full Name"
                prepend-icon="person"
                required
              ></v-text-field>
              <v-text-field
                v-model="userInformations.email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="email"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="userInformations.password"
                prepend-icon="lock"
                label="Password"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :type="showPassword ? 'text' : 'password'"
                counter
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="addToAPI">Ok</v-btn>
            <v-btn block color="primary" @click="clear">Clear</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    valid: false,
    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    showPassword: false,
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
      passwordMatch: () => 'Password must be at lest than 6 characters',
    },
    userInformations: {
      name: '',
      email: '',
      password: '',
    },
  }),
  computed: {
    ...mapGetters([
      'serverUrl', 'userInformation',
    ]),
  },

  methods: {
    ...mapActions([
      'updateUserInformation',
    ]),

    addToAPI() {
      axios.post(`${this.serverUrl}user/insert`, this.userInformations)
        .then((res) => {
          this.updateUserInformation(this.userInformations.email);
          console.log(88882, this.userInformation);
          console.log(3, this.userInformations.email);

          this.$router.push('/petRegister');
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
.backgroundImage {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url("./../../assets/images/Untitled.png");
}
.form {
  opacity: 0.7;
  z-index: -1;
  width: 350px;
  padding-bottom: 250px;
}
</style>
