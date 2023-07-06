Vue.createApp({
  data() { // this is the same as data: function() {}
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: { 
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  },
}).mount('#app');

// var btn = document.querySelector('button');
// var input = document.querySelector('input');
// var list = document.querySelector('ul');

// function addItem(){
//     var text = input.value;
//     var listItem = document.createElement('li');
//     listItem.textContent = text;
//     list.appendChild(listItem);
//     input.value = '';

// }

// btn.addEventListener('click', addItem);
