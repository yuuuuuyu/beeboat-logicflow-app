<template>
  <el-button type="primary" size="large" @click="show = true"
    >流程编排</el-button
  >
  <BtpLogicFlow v-model:value="show" />
</template>
<script setup lang="ts">
import { ref } from "vue"
import BtpLogicFlow from "@/components/logicflow/index.vue"

const show = ref(false)
</script>

