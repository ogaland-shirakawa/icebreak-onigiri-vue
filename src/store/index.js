import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import { points } from "./modules";
import { firstThemes } from "./modules";
import { answerMember } from "./modules";
import { secoundThemes } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    points,
    firstThemes,
    answerMember,
    secoundThemes,
  },
  plugins: [
    createPersistedState({
      key: "@onigiri",
      paths: ["points", "firstThemes", "answerMember", "secoundThemes"],
      storage: window.localStorage,
    }),
  ],
});
