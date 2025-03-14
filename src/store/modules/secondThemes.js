const state = {
  secondSelectedThemes: [],
};

const mutations = {
  setSecondSelectedThemes(state, secondSelectedTheme) {
    state.secondSelectedThemes.push(secondSelectedTheme);
  },
};

const actions = {
  setSecondSelectedThemes({ commit }, secondSelectedTheme) {
    commit("setSecondSelectedThemes", secondSelectedTheme);
  },
};

const getters = {
  getSecondSelectedThemes(state) {
    return state.secondSelectedThemes;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
