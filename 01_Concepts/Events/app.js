
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
      confirmedName: '',
    };
  },
  computed: {
    fullName() {
      console.log('run')
      if (this.name === '' || this.lastName) {
        return '';
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    increment() {
      this.counter = this.counter + 1;
    },
    decrement() {
      this.counter = this.counter - 1;
    },
  },
  watch: {
    counter(value) {
      if (value > 5) {
        this.counter = 0;
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (value === ''){
    //     this.fullName = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  }
});
app.mount('#user-goal');
