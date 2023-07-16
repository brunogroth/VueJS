const app = Vue.createApp({

  data() {
    return {
      result: 0,
      number: Math.floor(Math.random() * 50)
    }
  },
  methods: {
    add(value){
      this.result += value;
      console.log(value, this.result, this.number);
    },
  },
  computed:{
    answer() {
      if(this.result > this.number){
        return 'Too high!'
      } else if (this.result < this.number) {
        return 'Too low!'
      } else {
        return 'You discovered the number! the answer is ' + this.number
      }
    }
  },
  watch: {
    answer(){
      const that = this;
      setTimeout(function() {
        that.result = 0;
      }, 5000);
    }
  }
}).mount('#assignment');
