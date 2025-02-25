import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { App } from 'vue'

export default (app: App) => {
  app.use(ElementPlus, {
    // locale: store.getters.language === 'en' ? en : zhCn
  })
}