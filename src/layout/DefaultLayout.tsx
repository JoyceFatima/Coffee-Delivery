import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <Outlet />
    </div>
  )
}