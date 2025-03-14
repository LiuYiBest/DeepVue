import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button, Form, Input, message } from "antd"

// 定义表单验证模式
const schema = z
  .object({
    username: z
      .string()
      .min(3, "用户名至少需要3个字符")
      .max(20, "用户名不能超过20个字符"),
    email: z.string().email("请输入有效的邮箱地址"),
    password: z
      .string()
      .min(6, "密码至少需要6个字符")
      .max(50, "密码不能超过50个字符"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "密码不匹配",
    path: ["confirmPassword"]
  })

// 定义表单数据类型
type FormData = z.infer<typeof schema>

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    try {
      // 这里可以处理表单提交逻辑
      console.log(data)
      message.success("表单提交成功！")
      reset() // 重置表单
    } catch (error) {
      message.error("表单提交失败！")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">注册表单</h2>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="用户名"
          validateStatus={errors.username ? "error" : ""}
          help={errors.username?.message}
        >
          <Input {...register("username")} placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="邮箱"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Input {...register("email")} type="email" placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item
          label="密码"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Input.Password {...register("password")} placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
        >
          <Input.Password
            {...register("confirmPassword")}
            placeholder="请再次输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormExample
