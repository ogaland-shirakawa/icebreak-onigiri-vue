<template>
  <div class="member d-flex text-center">
    <div class="text-center mb-6 mr-6 ml-4">
      <v-img
        class="mb-3 mx-12 rounded-circle"
        :src="this.member.image"
        width="80"
        height="80"
        border-0
      />
      <p class="ml-2">{{ this.member.name }}</p>
      <div class="mb-2 d-flex justify-center">
        <v-btn
          class="light-green darken-4 white--text"
          @click="pointDown()"
          x-small
        >
          －
        </v-btn>
        <v-form class="mx-2">{{ displayPoint }}</v-form>
        <v-btn
          class="light-green darken-4 white--text"
          @click="pointUp()"
          x-small
        >
          ＋
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    member: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters("sample", ["getPlusCounter", "getMinusCounter"]),
    // countersのインデックスとmemberのidを合わせ、ポイントを表示
    displayPoint() {
      let userKey = `user${this.member.id}`;
      return this.getPlusCounter[userKey];
    },
  },
  methods: {
    ...mapActions("sample", ["setPlusCounter", "setMinusCounter"]),
    // ボタンを押すと1ポイント加算される
    pointUp() {
      let userKey = `user${this.member.id}`;
      this.setPlusCounter(userKey);
    },
    // ボタンを押すと1ポイント減算される
    pointDown() {
      let userKey = `user${this.member.id}`;
      this.setMinusCounter(userKey);
    },
  },
};
</script>
<style>
.member {
  font-size: 15px;
}
</style>
