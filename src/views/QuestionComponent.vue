<template>
  <div class="custom-font-size">
    <v-card class="pa-14 ml-12 mt-6" width="58%" height="500">
      <div class="text-center d-flex justify-center mt-14">
        <div>
          <p>{{ "回答者" }}</p>
          <div>
            <v-img
              class="answer-img mx-auto mb-5 secondary rounded-circle d-inline-block d-flex position"
              :src="memberResult.image"
              alt="回答者の写真"
              width="150"
              height="150"
              border-0
            >
            </v-img>
            {{ memberResult.text }}
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
        <div class="px-10 mt-16">{{ "の" }}</div>
        <div class="font-weight-large">
          <p>{{ "お題" }}</p>
          <div class="mb-6 mt-6">
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
import { allMembers } from "@/views/Members.js";
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
      result: "",
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
      console.log(this.member.text);
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
