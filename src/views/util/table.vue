<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"></avue-crud>
  </basic-container>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      option: {
        column: [
          {
            label: "规则名称",
            prop: "gzmc"
          },
          {
            label: "描述",
            prop: "ms"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
