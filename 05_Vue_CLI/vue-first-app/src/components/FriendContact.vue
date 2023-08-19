<template>
  <li>
    <h2>{{ name }}<small> {{ this.friendIsFavorite === '1' ? ' ⭐' : '' }}</small></h2>
    <button @click="toggleFavorite">{{ this.friendIsFavorite === '1' ? 'Unfavorite' : 'Favorite' }}</button> - 
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: function(value) {
        return value == '1' || value === '0'
      }
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "John Galt",
        phone: "1234-5678",
        email: "johngalt@localhost.com",
      },
      friendIsFavorite: this.isFavorite // not recommended changing values from props like this. Props are unmutable.
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0'
      } else {
        this.friendIsFavorite = '1';
      }
    }
  },
};
</script>