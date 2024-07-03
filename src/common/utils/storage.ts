import { isInExtension } from './common'

export const setStorage = (key: string, value: any) => {
  if(!isInExtension()) {
    return
  }
  chrome.storage.local.set({ [key]: value })
}

export const getStorage = async (key: string) => {
  if(!isInExtension()) {
    return
  }
  const res = await chrome.storage.local.get([key])
  return res[key]
}