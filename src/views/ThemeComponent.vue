<template>
  <div>
    <v-card class="theme-area" width="1000" height="250">
      <div class="theme">
        <p>{{ "お題" }}</p>
        <div class="mb-6 mt-6">
          {{ "行きたい国は？" }}
        </div>
        <v-btn color="#558B2F" class="btn">Start</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>

<style>
.theme-area {
  margin: 24px 24px 18px 36px;
}
.theme {
  padding: 36px;
  text-align: center;
  font-size: 24px;
  line-height: 56px;
}
.btn {
  color: #fff !important;
}
</style>
