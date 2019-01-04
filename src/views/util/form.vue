<template>
  <basic-container>
    <avue-form :option="option"
               v-model="form"></avue-form>
  </basic-container>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      option: {}
    };
  }
};
</script>

<style>
</style>
