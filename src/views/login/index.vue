<template>
  <div class="login-container">
    <h1 class="logo-title">
      {{ $t("msg.test") }}
    </h1>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon><User /></el-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon><Lock /></el-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="密码"
          name="password"
          tabindex="2"
          autocomplete="on"
        />
        <span class="show-pwd" @click="passwordVisible = !passwordVisible">
          <el-icon>
            <View v-if="passwordVisible" />
            <Hide v-else />
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import { User, Lock, View, Hide } from "@element-plus/icons-vue"
import { useUserStore } from "@/store/user"
import type { FormInstance } from "element-plus"

const router = useRouter()
const userStore = useUserStore()

const loginFormRef = ref<FormInstance>()
const loading = ref(false)
const passwordVisible = ref(false)

const loginForm = reactive({
  username: "admin",
  password: "123456"
})

// 表单验证规则
const loginRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
  ]
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    loading.value = true
    // 表单验证
    await loginFormRef.value.validate()
    // 登录
    await userStore.loginAction(loginForm.username, loginForm.password)
    // 获取用户信息
    await userStore.getUserInfoAction()
    ElMessage.success("登录成功")
    // 跳转到首页
    router.push("/")
  } catch (error: any) {
    console.error("登录失败:", error)
    ElMessage.error(error.message || "登录失败")
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
// ... 保持原有样式不变 ...
</style>
