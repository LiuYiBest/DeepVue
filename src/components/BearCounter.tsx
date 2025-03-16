import React from "react"
import { Button, Card, Space, Typography } from "antd"
import { useBearStore } from "../stores/useStore"

const { Title, Text } = Typography

const BearCounter = () => {
  const { bears, fish, addBear, removeBear, addFish, eatFish } = useBearStore()

  return (
    <Card className="max-w-md mx-auto mt-8">
      <Space direction="vertical" className="w-full">
        <Title level={3}>熊与鱼的生态系统</Title>

        <div className="flex justify-between items-center">
          <Text>熊的数量: {bears}</Text>
          <Space>
            <Button onClick={removeBear}>减少熊</Button>
            <Button type="primary" onClick={addBear}>
              增加熊
            </Button>
          </Space>
        </div>

        <div className="flex justify-between items-center">
          <Text>鱼的数量: {fish}</Text>
          <Space>
            <Button onClick={eatFish}>吃掉一条鱼</Button>
            <Button type="primary" onClick={() => addFish(5)}>
              添加5条鱼
            </Button>
          </Space>
        </div>
      </Space>
    </Card>
  )
}

export default BearCounter
