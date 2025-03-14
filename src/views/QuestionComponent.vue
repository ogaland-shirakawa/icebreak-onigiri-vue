<template>
  <div class="custom-font-size">
    <v-card
      class="pa-14 ml-12 mt-8 mr-12 mb-5"
      width="1100"
      height="530"
      color="#fff"
    >
      <div
        class="text-center d-flex justify-space-around position-relative mt-14"
      >
        <div class="position-relative my-auto">
          <p>{{ "回答者" }}</p>
          <div>
            <v-img
              class="answer-img mx-auto mb-5 secondary rounded-circle d-inline-block d-flex position"
              :src="
                memberResult.image
                  ? memberResult.image
                  : '/images/users/スクリーンショット 2025-03-07 162510.png'
              "
              alt="回答者の写真"
              width="150"
              height="150"
            >
            </v-img>
            {{ memberResult.name }}
          </div>
          <ButtonComponent
            v-if="btnMemberDisplay"
            @click="startMembersShuffle()"
            :btn-text="'Start'"
          />
          <ButtonComponent
            v-if="!btnMemberDisplay"
            @click="stopMembersShuffle()"
            :btn-text="'Stop'"
          />
        </div>
        <div class="px-8 my-auto justify-center position-relative">
          {{ "の" }}
        </div>
        <div class="font-weight-large my-auto">
          <p>{{ "お題" }}</p>
          <div class="mb-6 mt-6 position-relative">
            {{ result }}
          </div>
          <ButtonComponent
            v-if="btnDisplay"
            @click="startSelectedTheme()"
            :btn-text="'Start'"
          />
          <ButtonComponent
            v-if="!btnDisplay"
            @click="stopSelectedTheme()"
            :btn-text="'Stop'"
          />
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
import { allMembers } from "@/Members.js";
import { returnLotteryResult } from "@/common.js";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ButtonComponent,
  },
  props: {
    themeList: {
      type: Array,
    },
  },
  data() {
    return {
      interval: null,
      randomIndex: null,
      btnDisplay: true,
      result: "質問",
      member: allMembers,
      btnMemberDisplay: true,
      memberIndex: null,
      memberResult: "",
      memberInterval: null,
    };
  },
  computed: {
    ...mapGetters("answerMember", ["getSelectedMember"]),
    ...mapGetters("secoundThemes", ["getSecondSelectedThemes"]),
  },
  methods: {
    ...mapActions("answerMember", ["setSelectedMember"]),
    ...mapActions("secoundThemes", ["setSecondSelectedThemes"]),
    // スタートボタンを押したら回答者抽選が開始
    startMembersShuffle() {
      this.btnMemberDisplay = false;
      this.memberInterval = setInterval(() => {
        this.memberResult = returnLotteryResult(this.member);
      }, 80);
    },
    // ストップボタンを押したら回答者抽選が停止
    stopMembersShuffle() {
      this.btnMemberDisplay = true;
      // 選ばれたメンバーをローカルストレージに保存
      let selectedMember = this.memberResult.name;
      this.setSelectedMember(selectedMember);
      // 抽選をストップ
      clearInterval(this.memberInterval);
    },
    // スタートボタンを押したらお題抽選が開始
    startSelectedTheme() {
      this.btnDisplay = false;
      this.interval = setInterval(() => {
        this.result = returnLotteryResult(this.themeList);
      }, 80);
    },
    // ストップボタンを押したらお題抽選が停止
    stopSelectedTheme() {
      this.btnDisplay = true;
      // 抽選をストップ
      clearInterval(this.interval);
      // 選ばれたお題をローカルストレージに保存
      let secondSelectedTheme = this.result;
      this.setSecondSelectedThemes(secondSelectedTheme);
    },
  },
};
</script>
