<template>
  <li>
    <h2>{{ name }}<small> {{ isFavorite ? ' ⭐' : '' }}</small></h2>
    <button @click="toggleFavorite">{{ isFavorite ? 'Unfavorite' : 'Favorite' }}</button> - 
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ['name','phoneNumber','emailAddress','isFavorite' ],
  props: {
    id: {
      type: Number,
      required: true
    },
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
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value == '1' || value === '0'
      // }
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite // not recommended changing values from props like this. Props are unmutable.
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  },
};
</script>