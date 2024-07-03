import { isInExtension } from './common'

export async function getCurrentTab() {
  if(!isInExtension()) {
    return null
  }
  const queryOptions = { active: true, lastFocusedWindow: true }
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}