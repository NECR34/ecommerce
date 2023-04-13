import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../../components/productId/ProductInfo'
import SimilarProducts from '../../components/productId/SimilarProducts'
import "./styles/ProductId.css"

const ProductId = () => {

  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()
  const {id} = useParams()
  
  useEffect (()=> {
    const URL=`https://e-commerce-api-v2.academlo.tech/api/v1/products${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))

  },[id])

  useEffect (()=> {
    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"
    axios.get(URL)
    .then( res => setCategories(res.data.data.categories))
    .catch(err=> console.log(err))
  },[id])


  return (
    <main className='productId'>
      <section className='productId__path'>
      <Link to={"/"} className='producId__home'>Home</Link>
      <i className='productId__point bx bxs-circle'></i>
      <h4 className='productId__nameProduct'>{product?.title}</h4>
      </section>
      <ProductInfo product={product}/>
      <SimilarProducts product ={product} categories={categories}/>
     
    </main>
  )
}

export default ProductId