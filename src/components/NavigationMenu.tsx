import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import type { MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "/",
    label: <Link to="/">首页</Link>,
    icon: <HomeOutlined />
  },
  {
    key: "/users",
    label: "用户管理",
    icon: <UserOutlined />,
    children: [
      { key: "/users", label: <Link to="/users">用户列表</Link> },
      { key: "/users/:id", label: "用户详情", disabled: true }
    ]
  },
  {
    key: "/about",
    label: <Link to="/about">关于我们</Link>,
    icon: <InfoCircleOutlined />
  }
]

export default function NavigationMenu() {
  const location = useLocation()
  const selectedKeys = [location.pathname]

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      defaultOpenKeys={["/users"]}
      items={items}
    />
  )
}
