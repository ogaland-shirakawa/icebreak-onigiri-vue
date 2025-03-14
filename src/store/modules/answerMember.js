const state = {
  selectedMember: [],
};

const mutations = {
  setSelectedMember(state, selectedMember) {
    state.selectedMember.push(selectedMember);
  },
};

const actions = {
  setSelectedMember({ commit }, selectedMember) {
    commit("setSelectedMember", selectedMember);
  },
};

const getters = {
  getSelectedMember(state) {
    return state.selectedMember;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
