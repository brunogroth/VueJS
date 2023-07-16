const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      user1: false,
      user2: false,
      visibility: true,
      inputStyles: ''
    }
  },
  computed: {
    paragraphAClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.visibility,
        hidden: !this.visibility
      };
    }
  },
  methods: {
    changeVisibility() {
      this.visibility = !this.visibility
      console.log(this.visibility)
    }
  }
})

app.mount('#assignment')