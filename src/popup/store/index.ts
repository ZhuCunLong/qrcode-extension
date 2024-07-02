
import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'

interface FormDataState {
  prefix: string
  prefixEnCodingMode: 'encode' | 'decode'
  url: string
  urlEnCodingMode: 'encode' | 'decode'
}

export const useQrCodeFormStore = defineStore('qrCodeForm', () => {
  const formData = ref<FormDataState>({
    prefix: '',
    prefixEnCodingMode: 'decode',
    url: '',
    urlEnCodingMode: 'decode',
  })

  const composeUrl = computed(() => {
    let { prefix, url } = formData.value
    const { prefixEnCodingMode, urlEnCodingMode } = formData.value
    if(prefixEnCodingMode === 'encode') {
      prefix = encodeURIComponent(prefix)
    }
    if(urlEnCodingMode === 'encode') {
      url = encodeURIComponent(url)
    }
    return `${prefix}${url}`
  })

  const setFormData = (data: FormDataState ) => {
    formData.value = {
      ...formData.value,
      ...data,
    }
  }

  return {
    formData,
    composeUrl,
    setFormData,
  }
})

if ((import.meta as any).webpackHot) {
  (import.meta as any).webpackHot.accept(acceptHMRUpdate(useQrCodeFormStore, (import.meta as any).webpackHot))
}