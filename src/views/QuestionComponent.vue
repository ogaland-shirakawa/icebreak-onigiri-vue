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
            @click="startMembersShuffle"
            :btn-text="'Start'"
          />
          <ButtonComponent
            v-if="!btnMemberDisplay"
            @click="stopMembersShuffle"
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
            @click="startSelectedTheme"
            :btn-text="'Start'"
          />
          <ButtonComponent
            v-if="!btnDisplay"
            @click="stopSelectedTheme"
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
  methods: {
    // スタートボタンを押したらお題抽選が開始
    startSelectedTheme() {
      this.interval = setInterval(() => {
        this.randomIndex = Math.floor(Math.random() * this.themeList.length);
        this.btnDisplay = false;
        this.result = this.themeList[this.randomIndex];
      }, 80);
    },
    // ストップボタンを押したらお題抽選が停止
    stopSelectedTheme() {
      clearInterval(this.interval);
      this.btnDisplay = true;
    },
    // スタートボタンを押したら回答者抽選が開始
    startMembersShuffle() {
      this.memberInterval = setInterval(() => {
        this.memberIndex = Math.floor(Math.random() * this.member.length);
        this.btnMemberDisplay = false;
        this.memberResult = this.member[this.memberIndex];
      }, 80);
    },
    // ストップボタンを押したら回答者抽選が停止
    stopMembersShuffle() {
      clearInterval(this.memberInterval);
      this.btnMemberDisplay = true;
    },
  },
};
</script>
