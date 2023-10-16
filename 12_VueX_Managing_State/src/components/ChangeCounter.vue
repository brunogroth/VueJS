<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++; // not ideal practice
      // this.$store.commit("increment"); // ok practice - only synchronous code - execute the mutation (method "increment")
      this.$store.dispatch("increment"); // best practice - execute the actions that runs the mutation (method "increment")
    },
  },
};
</script>