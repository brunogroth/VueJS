<template>
  <div>
    <h3>{{ counter }}</h3>
    <p>more stuff here</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters["counterModule/normalizedCounter"];
    },
  },
};
</script>