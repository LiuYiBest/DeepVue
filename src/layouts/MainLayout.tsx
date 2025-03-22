import { Layout, Menu } from "antd"
import { Link, Outlet, useLocation } from "react-router-dom"
import NavigationMenu from "../components/NavigationMenu"

const { Header, Content, Sider } = Layout

export default function MainLayout() {
  const location = useLocation()

  return (
    <Layout className="min-h-screen">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="h-8 bg-gray-200 m-4 rounded" />
        <NavigationMenu />
      </Sider>
      <Layout>
        <Header className="bg-white shadow-sm">
          <div className="flex justify-between items-center h-full px-6">
            <Breadcrumb />
            <UserProfile />
          </div>
        </Header>
        <Content className="p-6">
          <div className="bg-white p-6 rounded shadow">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
