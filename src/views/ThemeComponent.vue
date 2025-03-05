<template>
  <div>
    <v-card class="pa-10 ml-12 mt-5" width="58%" height="250">
      <div>
        <div class="text-center">
          <div class="font-weight-large">{{ "お題" }}</div>
          <div class="mb-6 mt-6">
            <ButtonComponent
              v-if="btnDisplay"
              @click="theme_shuffle_button"
              :btn-text="'Start'"
            />
            <ButtonComponent
              v-if="!btnDisplay"
              @click="theme_shuffle_button"
              :btn-text="'Stop'"
            />
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
import { allThemes } from "@/views/Theme.js";

export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      theme: allThemes,
      interval: null,
      randomIndex: null,
      btnDisplay: true,
      themeIsRunning: true,
    };
  },
  methods: {
    startLottery() {
      this.btnDisplay = false;
      this.interval = setInterval(() => {
        // ランダムな数値を生成
        this.randomIndex = Math.floor(Math.random() * this.theme.length);
      }, 80);
    },
    stopLottery() {
      this.btnDisplay = true;
      // ランダム表示を停止
      clearInterval(this.interval);
      return this.theme[this.randomIndex];
    },
    theme_shuffle_button() {
      if (this.themeIsRunning == true) {
        // 抽選処理を走らせる
        this.startLottery();
        // 次回ボタン押下時に抽選ストップ処理を走らせるために抽選処理判定用変数にfalseを挿入
        this.themeIsRunning = false;
      } else {
        // 抽選ストップ処理を走らせる
        this.stopLottery();
        // 次回ボタン押下時に抽選処理を走らせるために抽選処理判定用変数にtrueを挿入
        this.themeIsRunning = true;
      }
    },
  },
};
</script>
