import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import { sample } from "./modules";
import practice from "./modules/practice";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sample,
    practice,
  },
  plugins: [
    createPersistedState({
      key: "@onigiri",
      paths: ["practice"],
      storage: window.localStorage,
    }),
  ],
});
