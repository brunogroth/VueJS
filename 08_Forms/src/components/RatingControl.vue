<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="updateActiveOption('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="updateActiveOption('average')">
        Average
      </button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="updateActiveOption('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },

  computed: {
    activeOption() {
      return this.modelValue;
    },
  },

  methods: {
    updateActiveOption(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(38, 125, 255);
}

.active button {
  color: rgb(172, 205, 255);
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 2rem;
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>