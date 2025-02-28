<template>
  <div id="app" style="background-color: orange" width="1080" height="1080">
    <!-- <v-app-bar color="#F4E2D0">
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
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#add {
  background-color: orange;
}
</style>
