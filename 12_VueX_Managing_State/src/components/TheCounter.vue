<template>
  <h3>Result * 2 = {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(["finalCounter"]), // VueX Mapper Helper - optional
  },
};
</script>