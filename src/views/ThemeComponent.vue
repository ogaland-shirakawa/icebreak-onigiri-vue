<template>
  <div>
    <v-card class="pa-10 ml-12 mt-5" width="1100" height="300" color="#fff">
      <div>
        <div class="text-center mt-4">
          <div class="font-weight-large">{{ "お題" }}</div>
          <div class="mb-6 mt-6">
            {{ result }}
          </div>
          <div>
            <ButtonComponent
              v-if="btnDisplay"
              @click="startLottery()"
              :btn-text="'Start'"
            />
            <ButtonComponent
              v-if="!btnDisplay"
              @click="stopLottery()"
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
import { allThemes } from "@/Theme.js";
import { returnLotteryResult } from "@/common";
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("firstThemes", ["getFirstSelectedThemes"]),
  },
  methods: {
    ...mapActions("firstThemes", ["setFirstSelectedThemes"]),
    // スタートボタンを押したらお題抽選が開始
    startLottery() {
      this.btnDisplay = false;
      this.interval = setInterval(() => {
        this.result = returnLotteryResult(this.theme);
      }, 80);
    },
    // ストップボタンを押したらお題抽選が停止
    stopLottery() {
      this.btnDisplay = true;
      // 一度使用したお題を表示させないためにお題配列の中から削除
      allThemes.splice(this.randomIndex, 1);
      // 一度使用したお題を２回目抽選用配列に格納
      this.selectedThemes.push(this.result);
      clearInterval(this.interval);
      // 選ばれたお題をローカルストレージに保存
      let firstSelectedTheme = this.result;
      this.setFirstSelectedThemes(firstSelectedTheme);
    },
  },
};
</script>
