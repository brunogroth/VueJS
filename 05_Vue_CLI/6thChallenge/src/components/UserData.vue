<template>
  <section>
    <div class="userInformation">
      <h2>{{ name }}</h2>
      <h3>{{ age }} Years</h3>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style>
.userInformation {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>

