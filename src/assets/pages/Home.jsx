import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCart from '../../components/app/Home/ProductCart'
import { getAllProducts } from '../../store/slices/products.slice'
import Categories from './Categories'
import "./styles/Home.css"


const Home = () => {
  const [nameProduct, setNameProduct] = useState("")

  const [category, setCategory] = useState("")

  const [filterProducts, setFilterProducts] = useState([])

  const products = useSelector(state=> state.products)
  
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  
  useEffect (() =>{
    setFilterProducts(products)

  },[products])

  useEffect (()=>{
    const newProducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id == category || !category))
    setFilterProducts(newProducts)
  },[nameProduct, category])

  return (
    <main className='home'>
      <form className='home__form' onSubmit={handleSubmit}>
        <div className='home__form-div'>
          <input className='home__form-input' type="text" id='nameProduct' placeholder='What are you looking for?'/>
          <button className='home__form-btn'><i className='bx bx-search'></i></button>
        </div>
      </form>
      <Categories setCategory={setCategory}/>
      <section className='home__containerProducts'>
        {
          filterProducts.map(product => <ProductCart key={product.id} product={product} />)
        }
      </section>
    </main>
  ) 
}

export default Home