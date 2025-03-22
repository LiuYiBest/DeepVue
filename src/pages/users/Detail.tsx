import { useParams } from "react-router-dom"
import { Card, Typography } from "antd"

const { Title } = Typography

export default function UserDetailPage() {
  const { userId } = useParams<{ userId: string }>()

  return (
    <Card>
      <Title level={4}>用户详情</Title>
      <p>用户ID: {userId}</p>
      {/* 实际开发中这里会调用 API 获取用户数据 */}
    </Card>
  )
}
