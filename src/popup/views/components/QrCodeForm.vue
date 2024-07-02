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
      <el-input v-model="formData.url" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useQrCodeFormStore } from '@popup/store'

const store = useQrCodeFormStore()

const { formData } = store

</script>

<style scoped>

</style>