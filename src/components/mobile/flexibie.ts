import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// 判断当前是否为移动端
const isMobile = computed(() => {
  return width.value < 768
})

// 动态计算rem的基准值 ，最大为40px,根据用户手机屏幕计算，并赋值给html的font-size
const rem = computed(() => {
//   监听屏幕宽度
    document.addEventListener('DOMContentLoaded', function () {
        const html: HTMLElement | null = document.querySelector('html')
        if (!html) return
        let fontSize = window.innerWidth / 10
        fontSize = fontSize > 40 ? 40 : fontSize
        html.style.fontSize = `${fontSize}px`
  })
})

export default {
  isMobile,
  rem
}
