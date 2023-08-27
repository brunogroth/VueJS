<template>
  <section>
    <form>
      <label for="name">Your name:</label>
      <input
        type="text"
        id="name"
        v-model="user.name"
        @change.prevent="updateUserData"
      />
      <div>
        <label for="age">Your age:</label>
        <input
          type="number"
          id="age"
          v-model="user.age"
          @change.prevent="updateUserData"
        />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["user-change"],
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    updateUserData() {
      this.$emit("user-change", this.user);
    },
  },
};
</script>
