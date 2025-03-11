<template>
  <div>
    <v-card
      class="absolute permanent right mx-auto my-5"
      width="650"
      height="850"
      color="#F4E2D0"
    >
      <p class="text-center font-weight-large pt-6">{{ "参加者" }}</p>
      <div class="d-flex flex-wrap text-center">
        <template>
          <div v-for="member in members" :key="member.id">
            <MemberComponent :member="member" />
          </div>
        </template>
        <v-btn @click="removeItem()">Reset</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
import MemberComponent from "./MemberComponent.vue";
import { allMembers } from "../Members";

export default {
  components: {
    MemberComponent,
  },
  data() {
    return {
      members: allMembers,
    };
  },
  methods: {
    removeItem() {
      localStorage.removeItem("@onigiri");
      location.reload();
      console.log("aaa");
    },
  },
};
</script>
