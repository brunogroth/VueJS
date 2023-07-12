const app = Vue.createApp({
  data() {
    return {
      name: 'Bruno Miguel Groth',
      age: 20,
      newAge: 0,
      imagePath: 'https://avatars.githubusercontent.com/u/96024737?v=4'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    }
  }
}).mount('#assignment');