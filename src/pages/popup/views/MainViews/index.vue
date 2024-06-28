<template>
  <div style="width: 500px" class="wrapper">
    <qr-code :text="text" >
      <template #empty>
        <el-empty :imageSize="100" description="暂无二维码"/>
      </template>
    </qr-code>
    <qr-code-form @compositeValueUpdate="handleCompositeValueUpdate" />
  </div>
</template>

<script setup lang="ts">
import QrCode from '@/components/QrCode.vue'
import QrCodeForm from '../components/QrCodeForm.vue'
import { ref } from 'vue'

const text = ref('')

const handleCompositeValueUpdate = (value: string) => {
  text.value = value
}
</script>

<style scoped lang="less">
.wrapper{
  display: flex;
}

:deep(.el-form-item__label){
  padding-right: 0;
}
</style>