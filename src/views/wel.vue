<template>
  <div>
    <div class="wel__header">
      <div class="wel__info">
        <img :src="userInfo.avatar"
             alt=""
             class="wel__info-img">
        <div class="wel__info-content">
          <div class="wel__info-title">
            {{$t('wel.info')}}
          </div>
          <div class="wel__info-subtitle">
            {{$t('wel.dept')}}
          </div>
        </div>
      </div>
      <div class="wel__extra">
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.count')}}
          </p>
          <p class="wel__extra-subtitle">
            56
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.team')}}
          </p>
          <p class="wel__extra-subtitle">
            8 <span>/ 24</span>
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">

            {{ $t('wel.project')}}
          </p>
          <p class="wel__extra-subtitle">
            2,223
          </p>
        </div>
      </div>
    </div>
    <basic-container>
      <avue-data-box :option="option1"></avue-data-box>
    </basic-container>

    <el-row :span="24">
      <el-col :span="18">
        <basic-container>
          <avue-data-progress :option="option3"
                              style="margin-bottom:20px"></avue-data-progress>
          <avue-data-tabs :option="option"></avue-data-tabs>
        </basic-container>
      </el-col>
      <el-col :span="6">
        <basic-container>
          <avue-data-icons :option="option2"></avue-data-icons>
        </basic-container>
      </el-col>
    </el-row>
    <basic-container>
      <avue-crud :option="option4"
                 :data="data">
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "wel",
  data() {
    return {
      option4: {
        index: true,
        column: [
          {
            label: "工作任务",
            prop: "rw"
          },
          {
            width: 500,
            label: "工作内容",
            prop: "nr",
            overHidden: true
          },
          {
            label: "工作时间",
            prop: "sj"
          }
        ]
      },
      data: [
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        }
      ],
      option3: {
        span: 8,
        data: [
          {
            title: "转化率（日同比 28%）",
            color: "rgb(178, 159, 255)",
            count: 32,
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "签到率（日同比 11%）",
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "签到率（日同比 11%）",
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://avue.top",
            target: "_blank"
          }
        ]
      },
      option2: {
        span: 12,
        data: [
          {
            title: "今日注册",
            count: 12678,
            icon: "el-icon-tickets",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "今日登录",
            count: 22139,
            icon: "el-icon-success",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "今日订阅",
            count: 35623,
            icon: "el-icon-info",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "今日评论",
            count: 16826,
            icon: "el-icon-message",
            href: "https://avue.top",
            target: "_blank"
          }
        ]
      },
      option1: {
        span: 6,
        data: [
          {
            title: "错误日志",
            count: 12332,
            icon: "el-icon-warning",
            color: "rgb(49, 180, 141)",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "数据展示",
            count: 33,
            icon: "el-icon-view",
            color: "rgb(56, 161, 242)",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "权限管理",
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(117, 56, 199)",
            href: "https://avue.top",
            target: "_blank"
          },
          {
            title: "用户管理",
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(230, 71, 88)",
            href: "https://avue.top",
            target: "_blank"
          }
        ]
      },
      option: {
        span: 8,
        data: [
          {
            title: "分类统计",
            subtitle: "实时",
            count: 7993,
            allcount: 10222,
            text: "当前分类总记录数",
            color: "rgb(27, 201, 142)",
            key: "类"
          },
          {
            title: "附件统计",
            subtitle: "实时",
            count: 3112,
            allcount: 10222,
            text: "当前上传的附件数",
            color: "rgb(230, 71, 88)",
            key: "附"
          },
          {
            title: "文章统计",
            subtitle: "实时",
            count: 908,
            allcount: 10222,
            text: "评论次数",
            color: "rgb(56, 161, 242)",
            key: "评"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {},
  methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.wel {
  &__header {
    padding: 25px 40px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__info {
    display: flex;
    align-items: center;
    &-img {
      border-radius: 72px;
      display: block;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &-content {
      position: relative;
      margin-left: 24px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
    &-title {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
    &-subtitle {
      position: relative;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
  }
  &__extra {
    &-item {
      position: relative;
      padding: 0 32px;
      display: inline-block;
      &:last-child {
        &::after {
          display: none;
        }
      }
      &:after {
        background-color: #e8e8e8;
        position: absolute;
        top: 30px;
        right: 0;
        width: 1px;
        height: 40px;
        content: "";
      }
    }
    &-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    &-subtitle {
      color: rgba(0, 0, 0, 0.85);
      font-size: 30px;
      line-height: 38px;
      margin: 0;
      span {
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
      }
    }
  }
}
</style>
