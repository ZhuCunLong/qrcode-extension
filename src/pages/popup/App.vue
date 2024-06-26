<template>
  <div>
    <h1>Hello World{{ count }}</h1>
    <el-button type="primary" @click="handleClick">测试2</el-button>
    <el-button @click="handleSave">存数据</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {setStorage} from '@/utils/storage'

const count = ref(0)

const handleClick = () => {
  count.value++
}

const handleSave = () => {
  setStorage('count', count.value)
}

</script>

<style lang="less" scoped>

</style>