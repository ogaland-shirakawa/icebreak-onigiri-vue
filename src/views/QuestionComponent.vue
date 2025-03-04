<template>
  <div class="custom-font-size">
    <v-card class="pa-14 ml-12 mt-6" width="58%" height="500">
      <v-row class="text-center d-flex justify-center mt-14">
        <v-col cols="4">
          <p>{{ "回答者" }}</p>
          <div>
            <v-img
              class="answer-img mx-auto mb-4 secondary rounded-circle d-inline-block border-xl"
              src="@/assets/白川.jpg"
              alt="回答者の写真"
              width="150"
              height="150"
              border-0
            />
          </div>
          <StartButtonComponent />
        </v-col>
        <v-col cols="2" class="my-auto">{{ "の" }}</v-col>
        <v-col cols="4">
          <p>{{ "お題" }}</p>
          <div class="mb-6 mt-6">
            {{ "質問" }}
          </div>
          <StartButtonComponent />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import StartButtonComponent from "/workspace/src/views/StartButtonComponent.vue";

export default {
  components: {
    StartButtonComponent,
  },
};
</script>
