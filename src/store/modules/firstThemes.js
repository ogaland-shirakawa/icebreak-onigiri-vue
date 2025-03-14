const state = {
  firstSelectedThemes: [],
};

const mutations = {
  setFirstSelectedThemes(state, firstSelectedTheme) {
    state.firstSelectedThemes.push(firstSelectedTheme);
  },
};

const actions = {
  setFirstSelectedThemes({ commit }, firstSelectedTheme) {
    commit("setFirstSelectedThemes", firstSelectedTheme);
  },
};

const getters = {
  getFirstSelectedThemes(state) {
    return state.firstSelectedThemes;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
