import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import { sample } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sample,
  },
  plugins: [
    createPersistedState({
      key: "@onigiri",
      paths: ["sample"],
      storage: window.localStorage,
    }),
  ],
});
