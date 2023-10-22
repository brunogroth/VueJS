import { createStore } from "vuex";
import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

// MODULES
import counterModule from "./counter";

// Core functionalities of VueX: State, Mutations, Actions and Getters - and how to use them

const store = createStore({
  modules: {
    counterModule: counterModule,
  },
  state() {
    return {
      isLogged: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
