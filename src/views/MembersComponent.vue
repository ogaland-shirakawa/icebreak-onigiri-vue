<template>
  <div>
    <v-navigation-drawer absolute permanent right width="35%">
      <p class="text-center font-weight-large mt-4">{{ "参加者" }}</p>
      <div class="d-flex flex-wrap">
        <template v-for="member in members">
          <MemberComponent :key="member.image" />
        </template>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import MemberComponent from "./MemberComponent.vue";
import { allMembers } from "./Members";

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
