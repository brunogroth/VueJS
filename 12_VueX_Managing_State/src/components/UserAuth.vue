<template>
  <div>
    <button @click="setAuth" v-if="!isLogged">Login</button>
    <button @click="setAuth" v-else>Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    setAuth() {
      this.$store.dispatch("setAuth");
    },
  },
  computed: {
    ...mapGetters(["isLogged"]), // VueX Mapper Helper - optional
  },
};
</script> 
