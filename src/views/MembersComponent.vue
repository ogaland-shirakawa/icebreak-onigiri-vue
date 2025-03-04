<template>
  <div>
    <v-navigation-drawer absolute permanent right width="35%">
      <p class="text-center font-weight-large mt-4">{{ "参加者" }}</p>
      <div class="d-flex flex-wrap">
        <template v-for="(members, i) in membersList">
          <MemberComponent :key="i" :member="members" />
        </template>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import MemberComponent from "./MemberComponent.vue";

export default {
  components: {
    MemberComponent,
  },
  data() {
    return {
      membersList: [
        {
          member_image: "吉岡さん.jpg",
          nickname: "吉岡さん",
        },
        {
          member_image: "しもぴーさん.jpg",
          nickname: "しもぴーさん",
        },
        {
          member_image: "アクイさん.jpg",
          nickname: "アクイさん",
        },
        {
          member_image: "リリーさん.jpg",
          nickname: "リリーさん",
        },
        {
          member_image: "もっさん.jpg",
          nickname: "もっさん",
        },
        {
          member_image: "おたけさん.jpg",
          nickname: "おたけさん",
        },
        {
          member_image: "うっちーさん.jpg",
          nickname: "うっちーさん",
        },
        {
          member_image: "みっぴーさん.jpg",
          nickname: "みっぴーさん",
        },
        {
          member_image: "ながやんさん.jpg",
          nickname: "ながやんさん",
        },
        {
          member_image: "白川.jpg",
          nickname: "まこっちゃん",
        },
        {
          member_image: "ななみん.jpg",
          nickname: "ななみん",
        },
      ],
    };
  },
};
</script>
