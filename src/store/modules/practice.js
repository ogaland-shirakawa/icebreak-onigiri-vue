const state = {
  theme: "",
};

const mutations = {
  setMembers(state) {
    state.theme;
  },
};

const actions = {
  getMembers({ commit }) {
    commit("setMembers");
  },
};

const getters = {
  getMembers(state) {
    return state.theme;
  },
};

export default {
  namespades: true,
  state,
  mutations,
  actions,
  getters,
};
