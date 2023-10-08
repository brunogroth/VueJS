<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Update Submitted Experiences</base-button>
      </div>
      <ul>
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
// import SurveyResult from "./components/survey/SurveyResult.vue";
export default {
  props: ["results"],

  components: {
    SurveyResult,
    // SurveyResult,
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