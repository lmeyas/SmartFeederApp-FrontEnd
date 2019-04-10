<template>
  <div id="app" class="backgroundImage">
    <v-container fill-height class="form">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Full Name"
                prepend-icon="person"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                label="Password"
                :rules="passwordMatch"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :type="showPassword ? 'text' : 'password'"
                counter
                @click:append="showPassword = !showPassword"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="submit">Ok</v-btn>
            <v-btn block color="primary" @click="clear">Clear</v-btn>
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
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    showPassword: false,
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      passwordMatch: () => 'Password must be less than 10 characters',
    },
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
