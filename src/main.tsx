import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ConfigProvider } from "antd"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import zhCN from "antd/locale/zh_CN"
import { router } from "./routes"
import "antd/dist/reset.css"
import "./index.css"
import "./utils/dayjs" // 引入 dayjs 配置

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
