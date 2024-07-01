
import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, reactive } from 'vue'

export const useQrCodeFormStore = defineStore('qrCodeForm', () => {
  const formData = reactive({
    prefix: '',
    prefixEnCodingMode: 'decode',
    url: '',
    urlEnCodingMode: 'decode',
  })

  const composeUrl = computed(() => {
    return `${formData.prefix}${formData.url}`
  })

  return {
    formData,
    composeUrl,
  }
})

if ((import.meta as any).webpackHot) {
  (import.meta as any).webpackHot.accept(acceptHMRUpdate(useQrCodeFormStore, (import.meta as any).webpackHot))
}