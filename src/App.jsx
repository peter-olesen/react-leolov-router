import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Lawyers } from './pages/Lawyers'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { MainLayout } from './layouts/MainLayout'
import { Error404 } from './pages/Error404'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={"about"} element={<About />} />
            <Route path={"lawyers"} element={<Lawyers />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"*"} element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
