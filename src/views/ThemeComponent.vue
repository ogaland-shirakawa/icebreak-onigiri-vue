<template>
  <div>
    <v-card class="pa-10 ml-12 mt-5" width="58%" height="250">
      <div>
        <div class="text-center">
          <div class="font-weight-large">{{ "お題" }}</div>
          <div class="mb-6 mt-6">
            {{ result }}
          </div>
          <div>
            <ButtonComponent
              v-if="btnDisplay"
              @click="startLottery"
              :btn-text="'Start'"
            />
            <ButtonComponent
              v-if="!btnDisplay"
              @click="stopLottery"
              :btn-text="'Stop'"
            />
          </div>
        </div>
      </div>
    </v-card>
    <QuestionComponent :theme-list="selectedThemes" />
  </div>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
import QuestionComponent from "./QuestionComponent.vue";
import { allThemes } from "@/views/Theme.js";

export default {
  components: {
    ButtonComponent,
    QuestionComponent,
  },
  data() {
    return {
      theme: allThemes,
      interval: null,
      randomIndex: null,
      btnDisplay: true,
      result: "質問",
      selectedThemes: [],
    };
  },
  methods: {
    startLottery() {
      this.interval = setInterval(() => {
        this.randomIndex = Math.floor(Math.random() * this.theme.length);
        this.btnDisplay = false;
        this.result = this.theme[this.randomIndex];
        console.log(this.startLottery);
      }, 80);
    },
    stopLottery() {
      clearInterval(this.interval);
      this.btnDisplay = true;
      // 一度使用したお題を表示させないためにお題配列の中から削除
      allThemes.splice(this.randomIndex, 1);
      // 一度使用したお題を２回目抽選用配列に格納
      this.selectedThemes.push(this.result);
      console.log(this.selectedThemes);
    },
  },
};
</script>
