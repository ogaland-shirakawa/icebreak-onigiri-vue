<template>
  <div>
    <v-card
      class="absolute permanent right mx-auto"
      width="38%"
      color="#F4E2D0"
    >
      <p class="text-center font-weight-large mt-2">{{ "参加者" }}</p>
      <div class="d-flex flex-wrap">
        <template>
          <div v-for="member in members" :key="member.id">
            <MemberComponent :member="member" />
          </div>
        </template>
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
};
</script>
