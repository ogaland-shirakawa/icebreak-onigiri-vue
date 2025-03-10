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
          @click="minusScore"
          x-small
        >
          －
        </v-btn>
        <div class="mx-2" :allCount="count">{{ count }}</div>
        <v-btn
          class="light-green darken-4 white--text"
          @click="plusScore"
          x-small
        >
          ＋
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  props: {
    member: {
      type: Array,
      required: true,
    },
  },
  methods: {
    plusScore() {
      this.count++;
    },
    minusScore() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>
<style>
.member {
  font-size: 15px;
}
</style>
