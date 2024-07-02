<template>
  <el-form label-position="top">
    <el-form-item label="前缀">
      <template #label>
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <span>前缀</span>
          <el-radio-group
            v-model="formData.prefixEnCodingMode"
            size="small"
          >
            <el-radio-button
              label="encode"
              value="encode"
            />
            <el-radio-button
              label="decode"
              value="decode"
            />
          </el-radio-group>
        </div>
      </template>
      <el-input
        v-model="formData.prefix"
        :rows="3"
        type="textarea"
        clearable
      />
    </el-form-item>
    <el-form-item label="url">
      <template #label>
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <span>url</span>
          <el-radio-group
            v-model="formData.urlEnCodingMode"
            size="small"
          >
            <el-radio-button
              label="encode"
              value="encode"
            />
            <el-radio-button
              label="decode"
              value="decode"
            />
          </el-radio-group>
        </div>
      </template>
      <el-input v-model="formData.url" clearable />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useQrCodeFormStore } from '@popup/store'
import { setStorage, getStorage, getCurrentTab } from '@/common/utils'
import { STORE_KEY } from '@popup/constant'
import { storeToRefs } from 'pinia'
import _isEmpty from 'lodash/isEmpty'
import { watchEffect } from 'vue'

const store = useQrCodeFormStore()

const { formData } = storeToRefs(store)

;(async function init() {
  const initData = await getStorage(STORE_KEY.QRCODE_CONFIG)
  const currentTab = await getCurrentTab()
  if(!_isEmpty(initData)) {
    formData.value = {
      ...initData,
      url: currentTab?.url || initData.url,
    }
  }
})()

watchEffect(() => {
  setStorage(STORE_KEY.QRCODE_CONFIG, formData.value)
})

</script>

<style scoped>

</style>