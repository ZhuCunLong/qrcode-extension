<template>
  <div class="qrcode-container" :style="{ width: `${width}px`}">
    <div :style="{  height: `${height}px` }">
      <div v-show="text" ref="divEl"></div>
      <slot v-if="!text" name="empty">
        <div class="empty">暂无内容</div>
      </slot>
    </div>
    <div
      v-if="showText && text"
      style="text-align: center;"
      class="mt20 qrcode-text">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * @author zhucunlong
 * @description 二维码组件
 * 使用技术栈：https://github.com/davidshimjs/qrcodejs
 * 通过lib js引入
 */
import { ref, watchEffect, onMounted } from 'vue'
interface Props {
  width?: number
  height?: number
  text?: string
  showText?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  width: 128,
  height: 128,
  text: '',
})

const divEl = ref<HTMLDivElement>(null)

const qrCode = ref<QRCode>(null)

onMounted(() => {
  const { text, width, height } = props
  qrCode.value = new QRCode(divEl.value, {
    text,
    width,
    height,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  })
})

watchEffect(() => {
  const { text } = props
  if(text) {
    qrCode.value.clear()

    qrCode.value.makeCode(text)
  }
})

</script>

<style scoped lang="less">
.qrcodq-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode-text{
  text-align: center;
  word-break: break-all;
}
.empty{
  border: 1px solid #c1c1c1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>