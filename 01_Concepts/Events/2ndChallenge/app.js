const app = Vue.createApp({
  data() {
    return {
      data: '',
      validatedData: '',
      validatedOutput: ''
    };
  },

  methods: {
    showAlert(){
      return alert('Bruno + Vue = <3');
    },
    setValidatedOutput(ev){
      this.validatedOutput = ev.target.value;
    }
  }
  
}).mount('#assignment')