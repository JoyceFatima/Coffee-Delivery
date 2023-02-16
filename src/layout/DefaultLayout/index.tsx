import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { DefaultLayoutPage } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutPage>
      <Header />
      <Outlet />
    </DefaultLayoutPage>
  )
}
