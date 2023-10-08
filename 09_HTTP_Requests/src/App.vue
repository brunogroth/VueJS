<template>
  <div>
    <learning-experience @survey-submit="storeSurvey" />
    <user-experiences :results="savedSurveyResults" />
  </div>
</template>

<script>
import LearningExperience from "./components/survey/LearningExperience.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

export default {
  components: {
    LearningExperience,
    UserExperiences,
  },

  data() {
    return {
      savedSurveyResults: [],
    };
  },

  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
      console.log(this.savedSurveyResults);
    },
  },
};
</script>


<style scoped>
</style>
