import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Health from "@/views/Health/Health.vue";
import Settings from "@/views/Settings/Settings.vue";
import Login from "@/views/Login/LoginForm.vue";
import CreateAccount from "@/views/Login/RegisterForm.vue";
import PetRegister from "@/views/Register/PetRegister.vue";
import DeviceRegister from "@/views/Register/DeviceRegister.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/createAccount",
      name: "Create Account",
      component: CreateAccount
    },
    {
      path: "/petRegister",
      name: "Pet Register",
      component: PetRegister
    },
    {
      path: "/deviceRegister",
      name: "Device Register",
      component: DeviceRegister
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/health",
      name: "Health",
      component: Health
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    }
  ]
});
