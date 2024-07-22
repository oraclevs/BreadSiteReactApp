
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/Contactpage'
import MenuPage from './pages/Menupage'
import { Route,Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage404'



function App() {
  return (
    <>
      <Routes>
        <Route path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About/>}
        />
        <Route
          path='/menu'
          element={<MenuPage />}
        />
        <Route
          path='/contact'
          element={<ContactPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
     </Routes>
    </>
  )
}

export default App
