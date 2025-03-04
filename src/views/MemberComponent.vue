<template>
  <div class="member d-flex">
    <div class="text-center">
      <v-img
        class="mb-3 mx-6 secondary rounded-circle d-inline-block border-xl"
        :src="require(`@/assets/${member.member_image}`)"
        width="120"
        height="120"
        border-0
      >
      </v-img>
      <div class="text-center mb-2">{{ member.nickname }}</div>
      <div class="mb-3">
        <v-btn x-small>－</v-btn>
        <v-textfield label="Solo">0</v-textfield>
        <v-btn x-small>＋</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.member {
  font-size: 16px;
}
</style>
