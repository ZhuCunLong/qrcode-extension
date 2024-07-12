<template>
  <div
    style="width: 300px;padding: 12px;"
    class="wrapper"
  >
    <el-card header="获取当前tab url1">
      <div>{{ url || '暂无数据' }}</div>
      <el-button @click="handleGetUrl">
        获取
      </el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentTab } from '@/common/utils'

const url = ref('')

const handleGetUrl = async () => {
  const tab = await getCurrentTab()
  if (tab) {
    url.value = tab.url
  }
}

</script>

<style scoped lang="less">
</style>