<template>
  <div class="member d-flex">
    <div class="text-center mx-a">
      <!-- <template v-for="member in members"> -->
      <v-img
        class="mb-3 mx-9 rounded-circle"
        :src="members.image"
        width="110"
        height="110"
        border-0
      />
      <div class="text-center mb-2">{{ members.text }}</div>
      <div class="mb-3">
        <v-btn x-small>－</v-btn>
        <v-textfield label="Solo">0</v-textfield>
        <v-btn x-small>＋</v-btn>
      </div>
      <!-- </template> -->
    </div>
  </div>
</template>
<script>
import { allMembers } from "./Members";

export default {
  data() {
    return {
      members: allMembers,
    };
  },
};
</script>
<style>
.member {
  font-size: 16px;
}
</style>
