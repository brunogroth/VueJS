<template>
  <div>
    <button @click="addOne">Add 1 using VueX in Vue Method</button> |
    <button @click="addMultiple({ value: 10 })">
      Add 10 using VueX in Vue Method
    </button>
    |
    <button @click="increase({ value: 10 })">
      Add 10 using VueX Mapper Helper
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++; // NOT RECOMMENDED practice
      // this.$store.commit("increment"); // ok practice - only synchronous code - execute the mutation (method "increment")
      this.$store.dispatch("increment"); // best practice - execute the actions that runs the mutation (method "increment")
    },
    addMultiple(payload) {
      // this.$store.state.counter++; // NOT RECOMMENDED practice
      // this.$store.commit("increment"); // ok practice - only synchronous code - execute the mutation (method "increment")
      this.$store.dispatch("increase", payload); // best practice - execute the actions that runs the mutation (method "increment")
    },

    // OR, using VueX Mapper Helpers:
    ...mapActions(["increase"]),
  },
};
</script>