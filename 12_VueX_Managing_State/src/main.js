import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

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
  mutations: {
    // Auth
    setAuth(state) {
      state.isLogged = !state.isLogged;
    },
  },
  actions: {
    // Auth
    setAuth(context) {
      context.commit("setAuth");
    },
  },
  getters: {
    // Auth
    isLogged(state) {
      return state.isLogged;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
