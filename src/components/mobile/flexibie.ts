import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// 判断当前是否为移动端
const isMobile = computed(() => {
  return width.value < 768
})

// 动态计算rem的基准值 ，最大为40px,根据用户手机屏幕计算，并赋值给html的font-size
const rem = computed(() => {
  const base = Math.min(width.value / 375, 40)
  document.documentElement.style.fontSize = `${base}px`
  return base
})

export default {
  isMobile,
  rem
}
