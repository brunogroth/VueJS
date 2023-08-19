const app = Vue.createApp({
  data() {
    return {
      friendList: [
        {
          id: 1,
          name: 'John Galt',
          phone: '1010-1957',
          email: 'john@galt.com'
        },
        {
          id: 2,
          name: 'Manuel Lorenz',
          phone: '41 9 9349-4393',
          email: 'manuel@localhost.com'
        }
      ],
      detailsAreVisible: false,
    }
  },
  // methods: {
  //   toggleDetails() {
  //     this.detailsAreVisible = !this.detailsAreVisible; 
  //   }
  // },

});

app.component('friend-contact', {
  template: `
    <ul>
      <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
      </li>
    </ul>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: 'John Galt',
        phone: '1010-1957',
        email: 'john@galt.com'
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app')