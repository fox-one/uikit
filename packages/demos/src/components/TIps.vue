<template>
  <v-row>
    <v-col cols="12">
      <f-tip type="warning">
        警告：如果不这样做，你会遭到伤害
        <br />
        错误码：1234
      </f-tip>
    </v-col>
    <v-col cols="12">
      <f-tip type="error">
        失败原因：吧啦吧啦吧啦
        <br />
        错误码：1234
      </f-tip>
    </v-col>
    <v-col cols="12">
      <f-tip type="info">
        这是一段重要的提示
        <br />
        如果真的读了就会得到奖励。
      </f-tip>
    </v-col>
    <v-col>
      <f-tip type="text">
        一般般的提示。
        <br />
        就是这个样子
      </f-tip>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FTips extends Vue {}
export default FTips;
</script>
