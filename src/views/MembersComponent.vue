<template>
  <div>
    <v-card
      class="absolute permanent right mx-auto my-5"
      width="650"
      height="860"
      color="#fff"
    >
      <p class="text-center font-weight-large pt-4">{{ "参加者" }}</p>
      <div class="d-flex flex-wrap text-center">
        <template>
          <div v-for="member in members" :key="member.id">
            <MemberComponent :member="member" />
          </div>
        </template>
      </div>
      <div class="text-right mt-0 mr-5 mb-2">
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
