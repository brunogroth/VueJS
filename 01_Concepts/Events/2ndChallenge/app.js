const app = Vue.createApp({
  data() {
    return {
      data: '',
      validatedData: '',
      validatedOutput: ''
    };
  },

  methods: {
    saveData(ev){
      this.data = ev.target.value;
    },
    showAlert(){
      alert('Bruno + Vue = <3');
    },
    setValidatedOutput(ev){
      this.validatedOutput = ev.target.value;
    }
  }
  
}).mount('#assignment')