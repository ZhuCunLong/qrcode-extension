<template>
  <div style="width: 500px" class="wrapper">
    <div ref="el"></div>
    <div>
      <el-input v-model="input"></el-input>
      <el-button @click="handleCreate">生成</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const input = ref('')

const el = ref()

const qrCode = ref<QRCode>(null)

onMounted(() => {
  qrCode.value = new QRCode(el.value, {
    text: '',
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  })
})

const handleCreate = async () => {
  if(input.value){
    qrCode.value.makeCode(input.value)
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  display: flex;
}
</style>
