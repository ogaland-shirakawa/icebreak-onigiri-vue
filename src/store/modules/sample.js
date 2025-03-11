const state = {
  counters: {
    user1: 0,
    user2: 0,
    user3: 0,
    user4: 0,
    user5: 0,
    user6: 0,
    user7: 0,
    user8: 0,
    user9: 0,
    user10: 0,
    user11: 0,
  },
};

const mutations = {
  // 1ポイントずつ加算
  setPlusCounter(state, userKey) {
    state.counters[userKey]++;
  },
  // 1ポイントずつ減算
  setMinusCounter(state, userKey) {
    // ポイントを0以下にしない
    if (state.counters[userKey] > 0) {
      state.counters[userKey]--;
    }
  },
};

const actions = {
  setPlusCounter({ commit }, userKey) {
    commit("setPlusCounter", userKey);
  },
  setMinusCounter({ commit }, userKey) {
    commit("setMinusCounter", userKey);
  },
};

const getters = {
  getPlusCounter(state) {
    return state.counters;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
