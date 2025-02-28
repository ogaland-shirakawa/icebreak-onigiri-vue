<template color="orange">
  <div id="app" width="1080" height="1080">
    <!-- <v-app-bar app color="#F4E2D0">
      <span class="white--text">
        佐藤です、好きなおにぎりの具は梅干しです。
      </span>
    </v-app-bar> -->
    <ThemeComponent />
    <QuestionComponent />
  </div>
</template>

<script>
import ThemeComponent from "./views/ThemeComponent.vue";
import QuestionComponent from "./views/QuestionComponent.vue";

export default {
  name: "MainComponent",
  components: {
    ThemeComponent,
    QuestionComponent,
  },
};
</script>

<style>
#add {
  background-color: orange;
}
</style>
