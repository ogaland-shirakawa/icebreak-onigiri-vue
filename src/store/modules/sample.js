const state = {
  counter: 0,
};

const mutations = {
  setCounter(state) {
    state.counter = state.counter + 1;
  },
};

const actions = {
  setCounter({ commit }) {
    commit("setCounter");
  },
};

const getters = {
  getCounter(state) {
    return state.counter;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
