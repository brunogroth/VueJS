<template>
  <div>
    <BaseContainer title="Auth">
      <UserAuth />
    </BaseContainer>
    <BaseContainer title="Vuex">
      <template v-if="isLogged">
        <TheCounter />
        <FavoriteValue />
        <ChangeCounter />
        <button @click="addOne">add 10</button>
      </template>
      <p v-else>You have no access to see this content. Please Login!</p>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 10 }); // can be used
      this.$store.dispatch({
        type: "counterModule/increase",
        value: 10,
      });
    },
  },

  computed: {
    ...mapGetters(["isLogged"]),
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