<template>
  <div
    style="width: 500px;padding: 12px;"
    class="wrapper"
  >
    <el-card
      class="mr20"
      :body-style="{ padding: '12px' }"
    >
      <qr-code
        :text="text"
        show-text
      >
        <template #empty>
          <el-empty
            :image-size="100"
            description="暂无二维码"
          />
        </template>
      </qr-code>
    </el-card>
    <el-card
      style="flex-grow: 1;"
      :body-style="{ padding: '12px' }"
    >
      <qr-code-form />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import QrCode from '@common/components/QrCode.vue'
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