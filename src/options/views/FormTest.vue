<template>
  <el-form ref="formEl" :model="formData">
    <el-form-item label="foo" prop="foo">
      <el-input v-model="formData.foo" />
    </el-form-item>
    <el-form-item label="bar" prop="bar">
      <el-input v-model="formData.bar" />
    </el-form-item>
  </el-form>
  <div>
    <el-button type="primary" @click="handleSave">
      保存
    </el-button>
    <el-button @click="handleReset">
      重置
    </el-button>
    <el-button type="" @click="handleReload">
      读缓存
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setStorage, getStorage } from '@/common/utils'
import _cloneDeep from 'lodash/cloneDeep'
import { FormInstance } from 'element-plus'
const formData = ref({
  foo: '',
  bar: '',
})

const formEl = ref<FormInstance>()

const handleSave = () => {
  setStorage('formData', _cloneDeep(formData.value))
}

const handleReset = () => {
  formEl.value?.resetFields()
}

const handleReload = async () => {
  const data = await getStorage('formData')
  formData.value = data
}
</script>

<style scoped lang="less">

</style>