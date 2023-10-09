<template>
  <section>
    <base-card>
      <h2>How was your learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was...</h3>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            id="rating-poor"
            value="poor"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            id="rating-average"
            value="average"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            name="rating"
            id="rating-great"
            value="great"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">{{ error }}</p>
        <base-button>Submit</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ["survey-submit"],

  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },

  methods: {
    submitSurvey() {
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // event removed - now data goes to Firebase API
      // this.$emit("survey-submit", {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });
      this.error = null;
      fetch(import.meta.env.VITE_API_FIREBASE_URL + "/surveys.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.enteredName,
          rating: this.chosenRating,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error(
              "Something went wrong - try again later, check your .env file or contact the developer team!"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          this.error =
            "Something went wrong - try again later, check your .env file or contact the developer team!";
        });

      this.enteredName = "";
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>