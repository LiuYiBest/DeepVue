import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "antd/dist/reset.css"
import "./index.css"
import "./utils/dayjs" // 引入 dayjs 配置

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
