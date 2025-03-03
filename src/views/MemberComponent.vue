<template>
  <v-app>
    <div class="member">
      <!-- <v-sheet
        v-for="member in memberList"
        :key="member.value"
        :value="member.value"
      >
        {{ member.label }}
      </v-sheet> -->
      <v-container>
        <v-row align-center>
          <v-sheet class="text-center centered-content">
            <v-img
              class="answer-img mx-auto mb-4 secondary rounded-circle d-inline-block"
              src="@/assets/白川.jpg"
              width="90"
              height="90"
            ></v-img>
            <p>{{ "まこっちゃん" }}</p>
            <div>
              <v-col cols="5" sm="6" class="text-center">
                <v-btn x-small>-</v-btn>
                <v-textfield label="Solo">0</v-textfield>
                <v-btn x-small>+</v-btn>
              </v-col>
            </div>
          </v-sheet>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  props: {
    memberList: {
      type: String,
    },
  },
};
</script>
<style>
.member {
  font-size: 16px;
}
</style>
