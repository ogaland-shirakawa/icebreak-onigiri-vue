<template>
  <div>
    <v-card class="pa-10 ml-12 mt-5" width="1000" height="250">
      <div>
        <div class="text-center">
          <p class="font-weight-large">{{ "お題" }}</p>
          <div class="mb-6 mt-6">
            {{ "行きたい国は？" }}
          </div>
          <StartButtonComponent />
        </div>
      </div>
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
