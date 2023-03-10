import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { Shopping } from './pages/Shopping'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
