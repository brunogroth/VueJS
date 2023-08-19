<template>
  <section>
    <h2>My Friends</h2>
    <ul v-for="(friend, index) in friendList" :key="index">
      <li>{{ friend.name }}</li>
      <li>Phone: {{ friend.phone }}</li>
      <li>Email: {{ friend.email }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friendList: [
        {
          id: 1,
          name: "John Galt",
          phone: "1234-5678",
          email: "john@galt.com",
        },
        {
          id: 2,
          name: "Johanna",
          phone: "1234-5678",
          email: "Johanna@localhost.com",
        }
      ],
    };
  },
};
</script>