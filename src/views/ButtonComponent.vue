<template>
  <div>
    <v-btn
      v-bind="{ ...$attrs }"
      v-on="$listeners"
      class="light-green darken-4 white--text"
    >
      {{ btnText }}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    btnText: {
      type: String,
    },
  },
};
</script>
