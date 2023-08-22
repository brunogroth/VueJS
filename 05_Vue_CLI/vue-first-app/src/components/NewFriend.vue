<template>
  <form @submit.prevent="addFriend"> 
    <div>
      <label>Name</label>
      <input type="text" v-model="friend.name" />
    </div>
    <div>
      <label>Phone Number</label>
      <input type="text" v-model="friend.phone" />
    </div>
    <div>
      <label>Email Address</label>
      <input type="email" v-model="friend.email" />
    </div>
    <input type="checkbox" v-model="friend.isFavorite" /><label>Favorite</label>
    <div>
      <button type="submit" > Add to Friend List!</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['new-friend'],
  data() {
    return {
      friend: {
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },

  methods: {
    addFriend() {
      this.$emit(
        "new-friend",
        this.friend
      );
    },
  },
};
</script>
