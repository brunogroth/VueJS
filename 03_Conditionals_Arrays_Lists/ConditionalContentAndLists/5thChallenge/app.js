const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      hidden: false
    }
  },
  methods: {
    createTask(){
      if(this.task){
        this.tasks.push(this.task);
        this.task = '';
      }
    },
    changeListVisibility(){
      this.hidden = !this.hidden;
      console.log(this.hidden);
    }
  },
}).mount('#assignment');
