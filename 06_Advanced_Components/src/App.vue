
<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"> </active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"> </manage-goals> -->

    <!-- Dynamic Components -->
    <!-- All the components inside "keep-alive" will have their state saved -->
    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
// import UserInfo from "./components/UserInfo.vue";
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,

    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Bruno Miguel Groth",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
      console.log(this.selectedComponent);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>