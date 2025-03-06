<template>
  <v-app color="orange">
    <div id="app" style="background-color: orange">
      <!-- <v-app-bar color="#F4E2D0">
        <span class="green--text">
          佐藤です、好きなおにぎりの具は梅干しです。
        </span>
      </v-app-bar> -->
      <ThemeComponent />
      <!-- <QuestionComponent /> -->
      <MembersComponent />
    </div>
  </v-app>
</template>

<script>
import ThemeComponent from "./views/ThemeComponent.vue";
// import QuestionComponent from "./views/QuestionComponent.vue";
import MembersComponent from "./views/MembersComponent.vue";

export default {
  name: "MainComponent",
  components: {
    ThemeComponent,
    // QuestionComponent,
    MembersComponent,
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
  font-family: "Arial", sans-serif;
  font-size: 25px;
}
</style>
