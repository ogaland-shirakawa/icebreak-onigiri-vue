<template>
  <div>
    <v-navigation-drawer absolute permanent right width="600">
      <p class="text-center font-weight-large mt-4">{{ "参加者" }}</p>
      <MemberComponent :members="memberList" />
    </v-navigation-drawer>
  </div>
</template>
<script>
import MemberComponent from "./MemberComponent.vue";

export default {
  components: {
    MemberComponent,
  },
  deta() {
    return {
      memberList: [
        { value: "1", label: "吉岡さん" },
        { value: "2", label: "アクイさん" },
        { value: "3", label: "リリーさん" },
        { value: "4", label: "もっさん" },
        { value: "5", label: "しもぴーさん" },
        { value: "6", label: "おたけさん" },
        { value: "7", label: "うっちーさん" },
        { value: "8", label: "みっぴーさん" },
        { value: "9", label: "ながやんさん" },
        { value: "10", label: "ななみん" },
        { value: "11", label: "まこっちゃん" },
      ],
    };
  },
};
</script>
