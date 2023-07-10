
const app = Vue.createApp({
  data() {
    return {
      courseGoal: '',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() { // same as outputGoal: function() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5){
        this.courseGoal = 'Learn Vue!'
      } else {
        this.courseGoal = 'Master Vue!'
      }
    },

  },
});
app.mount('#user-goal');
