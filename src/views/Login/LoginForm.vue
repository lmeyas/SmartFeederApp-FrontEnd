<template>
  <div id="app" class="backgroundImage">
    <v-container fill-height class="form">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn id="createAccount" block flat color="primary">
              <router-link to="/createAccount">Create account</router-link>
            </v-btn>
            <v-btn block color="primary dark" to="/petRegister">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {};
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
