import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';

// Helpers

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#005dfc', // #E53935
    secondary: '#eece1c', // #FFCDD2
    sidebar: '#2f3849', // #3F51B5
    background: '#e8f1f6',
    deviceCard: '#f4ba82',
    medicineCard: '#6FADD1',
    darkText: '#24272a',
    buttonAdd: '#0c084c',
  },
});
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
