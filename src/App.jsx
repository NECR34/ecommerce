import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import ProductId from './assets/pages/ProductId'
import Purchases from './assets/pages/Purchases'
import Cart from './assets/pages/Cart'
import ProtectedRoutes from './components/app/ProtectedRoutes'
import Header from './layout/Header'



function App() {


  return (
    <div className="App">
      <Header />
     <Routes>
      <Route   path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products/:id' element={<ProductId />} />
     
      <Route element={<ProtectedRoutes />}>
      <Route path='/purchases' element={<Purchases />} />
      <Route path='/cart' element={<Cart />} />
      </Route>

     </Routes>
    </div>
  )
}

export default App
