export const setStorage = (key: string, value: any) => {
  chrome.storage.local.set({ [key]: value })
}

export const getStorage = async (key: string) => {
  const res = await chrome.storage.local.get([key])
  return res[key]
}