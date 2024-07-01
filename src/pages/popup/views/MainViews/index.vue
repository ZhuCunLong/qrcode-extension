<template>
  <div style="width: 500px" class="wrapper">
    <qr-code :text="text" >
      <template #empty>
        <el-empty :imageSize="100" description="暂无二维码"/>
      </template>
    </qr-code>
    <qr-code-form />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import QrCode from '@/components/QrCode.vue'
import QrCodeForm from '../components/QrCodeForm.vue'

import { useQrCodeFormStore } from '../../store'

const { composeUrl: text } = storeToRefs(useQrCodeFormStore())

</script>

<style scoped lang="less">
.wrapper{
  display: flex;
}

:deep(.el-form-item__label){
  padding-right: 0;
}
</style>