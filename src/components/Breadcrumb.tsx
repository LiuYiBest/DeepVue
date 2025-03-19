import { Breadcrumb } from "antd"
import { Link, useMatches } from "react-router-dom"

export default function AppBreadcrumb() {
  const matches = useMatches()
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => ({
      path: match.pathname,
      title: match.handle.crumb(match.data)
    }))

  return (
    <Breadcrumb>
      {crumbs.map((crumb, index) => (
        <Breadcrumb.Item key={crumb.path}>
          {index === crumbs.length - 1 ? (
            <span>{crumb.title}</span>
          ) : (
            <Link to={crumb.path}>{crumb.title}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
