export function isInExtension(): boolean {
  return !!(window.chrome && window.chrome.runtime && window.chrome.runtime.id)
}