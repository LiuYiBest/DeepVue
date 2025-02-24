import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
/**
 * 公开路由表
 */
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',          // 根路径
    redirect: '/login'  // 添加重定向到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/home/index.vue')
//   },
//   // 404 页面
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: () => import('@/views/error/404.vue')
//   }
]

/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 这里可以添加你的导航守卫逻辑
  next()
})

export default router