<template>
  <div style="width: 500px;">
    <h1>Hello World{{ count }}</h1>
    <div>缓存数据 {{ cacheCount }}</div>
    <el-button type="primary" @click="handleClick">测试2</el-button>
    <el-button @click="handleSave">存数据</el-button>
    <el-button @click="handleGet">取数据</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {setStorage, getStorage} from '@/utils/storage'

const count = ref(0)

const cacheCount = ref(null)

const handleClick = () => {
  count.value++
}

const handleSave = () => {
  setStorage('count', count.value)
}

const handleGet = async () => {
  const res = await getStorage('count')
  cacheCount.value = res
}

</script>

<style lang="less" scoped>

</style>