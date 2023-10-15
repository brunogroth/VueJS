<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++; // not ideal
      this.$store.commit("increment"); // execute the mutation (method "increment")
    },
  },
};
</script>