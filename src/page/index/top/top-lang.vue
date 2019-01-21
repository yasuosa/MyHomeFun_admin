<template>
  <el-dropdown trigger="click"
               @command="handleSetLanguage">
    <i class="icon-zhongyingwen"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'"
                        command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'"
                        command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top-lang",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["language"])
  },
  props: [],
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.commit("SET_LANGUAGE", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
