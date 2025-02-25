import { createI18n } from "vue-i18n"

const messages = {
  en: {
    msg: {
      test: "hello world"
    }
  },
  zh: {
    msg: {
      test: "你好世界"
    }
  }
}

const locale = "zh"

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  // 设置语言
  locale,
  // 设置语言资源
  messages
})

export default i18n