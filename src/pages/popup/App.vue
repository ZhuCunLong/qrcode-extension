<template>
  <div style="width: 500px">
    <h1>Hello World{{ count }}</h1>
    <div ref="el"></div>
    <div>缓存数据 {{ cacheCount }}</div>
    <el-input v-model="input"></el-input>
    <el-button @click="handleCreate">生成</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { setStorage, getStorage } from "@/utils/storage";

const count = ref(0);

const cacheCount = ref(null);

const input = ref('');

const el = ref();

const qrCode = ref<QRCode>(null)

onMounted(() => {
  qrCode.value = new QRCode(el.value, {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});

const handleClick = async () => {
  count.value++;

  // const url = await QRCode.toDataURL('')
  // qrcodeSrc.value = url
};

const handleCreate = async () => {
  if(input.value){
    qrCode.value.makeCode(input.value); 
  }
}
</script>

<style lang="less" scoped></style>
