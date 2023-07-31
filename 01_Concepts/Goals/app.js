
const app = Vue.createApp({
  data() {
    return {
      goal: '',
      courseGoalA: 'Learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() { // same as outputGoal: function() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5){
        this.goal = this.courseGoalA;
      } else {
        this.goal = this.courseGoalB;
      }
    },

  },
});
app.mount('#user-goals');
