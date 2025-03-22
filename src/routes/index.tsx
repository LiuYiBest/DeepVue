import { createBrowserRouter, Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import AuthLayout from "../layouts/AuthLayout"
import { lazy, Suspense } from "react"
import { useAuthStore } from "../stores/auth"
import { useLocation } from "react-router-dom"
import PageLoading from "../components/PageLoading"

// 页面组件
const HomePage = lazy(() => import("../pages/Home"))
const AboutPage = lazy(() => import("../pages/About"))
const UserListPage = lazy(() => import("../pages/users/List"))
const UserDetailPage = lazy(() => import("../pages/users/Detail"))
const LoginPage = lazy(() => import("../pages/auth/Login"))
const NotFoundPage = lazy(() => import("../pages/NotFound"))

// 路由守卫组件
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

// 路由配置
const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoading />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoading />}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Suspense fallback={<PageLoading />}>
                  <UserListPage />
                </Suspense>
              </RequireAuth>
            )
          },
          {
            path: ":userId",
            element: (
              <RequireAuth>
                <Suspense fallback={<PageLoading />}>
                  <UserDetailPage />
                </Suspense>
              </RequireAuth>
            )
          }
        ]
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<PageLoading />}>
            <LoginPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageLoading />}>
        <NotFoundPage />
      </Suspense>
    )
  }
]

export const router = createBrowserRouter(routes)
