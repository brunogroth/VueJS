<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],

  beforeRouterEnter(to, from, next) {
    // something here
    next();
  },

  // beforeRouterLeave(to, from, next) {
  //   if (!this.changesSaved) {
  //     const userWantsToLeave = confirm(
  //       "are you shure that wants to leave? There is unsaved data"
  //     );
  //     if (userWantsToLeave) {
  //       next(userWantsToLeave);
  //     }
  //   }
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>