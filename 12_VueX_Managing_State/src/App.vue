<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <ChangeCounter />
    <button @click="addOne">add 10</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },

  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 10 }); // can be used
      this.$store.commit({
        type: "increase",
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>