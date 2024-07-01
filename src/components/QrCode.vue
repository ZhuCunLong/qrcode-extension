<template>
  <div :style="{ width: `${width}px`, height: `${height}px` }">
    <div v-show="text" ref="divEl"></div>
    <slot v-if="!text" name="empty">
      <div class="empty">暂无内容</div>
    </slot>
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
.empty{
  border: 1px solid #c1c1c1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>