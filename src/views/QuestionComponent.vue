<template>
  <div>
    <v-card class="question-area" width="1000" height="500">
      <div class="question">
        <div class="answer-member">
          <p>{{ "回答者" }}</p>
          <v-img src="/src/assets/photo/白川.png"></v-img>
          <p>{{ "写真" }}</p>
          <v-btn color="#558B2F" class="btn">Start</v-btn>
        </div>
        <p class="no">{{ "の" }}</p>
        <div class="answer-question">
          <p>{{ "お題" }}</p>
          <div>
            {{ "質問" }}
          </div>
          <v-btn color="#558B2F" class="btn">Start</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>

<style>
.question-area {
  margin: 36px auto 24px 36px;
  display: flex;
}
.question {
  padding: 120px;
  text-align: center;
  font-size: 24px;
  line-height: 72px;
  display: flex;
}
.answer-member {
  width: 35%;
}
.no {
  padding-top: 56px;
  width: 30%;
}
.answer-question {
  width: 35%;
}
.btn {
  color: #fff !important;
}
</style>
