import counterGetters from "./getters";
import counterMutations from "./mutations";
import counterActions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
