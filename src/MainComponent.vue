<template>
  <v-app color="orange">
    <div id="app" style="background-color: orange">
      <!-- <v-app-bar color="#F4E2D0">
        <span class="green--text">
          佐藤です、好きなおにぎりの具は梅干しです。
        </span>
      </v-app-bar> -->
      <div class="d-flex">
        <ThemeComponent />
        <MembersComponent />
      </div>
    </div>
    <div>{{ getCounter }}</div>
    <v-btn @click="setCounter(100)">aa</v-btn>
  </v-app>
</template>

<script>
import ThemeComponent from "./views/ThemeComponent.vue";
import MembersComponent from "./views/MembersComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MainComponent",
  components: {
    ThemeComponent,
    MembersComponent,
  },
  computed: {
    ...mapGetters("setMembers", ["getCounter"]),
  },
  methods: {
    ...mapActions("setMembers", ["setCounter"]),
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
