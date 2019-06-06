import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInformation: [],
    serverUrl: ('http://localhost:5000/'),
  },
  getters: {
    serverUrl: state => state.serverUrl,
    userInformation: state => state.userInformation,
  },
  mutations: {
    updateUserInformation: (state, userInformation) => { state.userInformation = userInformation; },
  },
  actions: {
    updateUserInformation({ commit }, userInformation) { commit('updateUserInformation', userInformation); },
  },
});
