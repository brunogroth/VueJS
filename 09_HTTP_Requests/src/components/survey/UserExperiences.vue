<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Update Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey first!
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :survey="result"
          :name="result.name"
          :rating="result.rating"
          :key="result.id"
        >
        </survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(import.meta.env.VITE_API_FIREBASE_URL + "/surveys.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.error =
            "Failed to fetch data - please try again later, check your .env file or contact the developer team!";
        });
    },
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>