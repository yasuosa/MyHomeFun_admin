<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data">
      <template slot="menuLeft">
        <el-button type="primary"
                   size="small"
                   @click="handleForm"
                   icon="el-icon-plus">add</el-button>
      </template>
      <template slot="menu"
                slot-scope="{row}">
        <el-button size="small"
                   type="text"
                   @click="handleForm(row,row.$index)"
                   icon="el-icon-edit">edit</el-button>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
export default {
  data() {
    return {
      option: {
        addBtn: false,
        editBtn: false,
        column: [
          {
            label: "姓名",
            prop: "name"
          }
        ]
      },
      data: [
        {
          name: "small"
        }
      ]
    };
  },
  methods: {
    handleForm(id, index) {
      this.$router.push({
        path: "/form-detail/index",
        query: {
          index
        }
      });
    }
  }
};
</script>

<style>
</style>
