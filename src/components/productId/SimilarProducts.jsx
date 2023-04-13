import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductCart from '../app/Home/ProductCart'


const SimilarProducts = ({categories, product}) => {

    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect (() => {
     if (categories && product){
        const category = categories.filter(category => category.name === product.category)
        const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId${category[0].id}`
        axios.get(URL)
        .then(res => { 
            const productsFilter = res.data.data.products.filter(productCategory => productCategory.id != product.id)
            setProductsByCategory(productsFilter)
        })
        .catch(err => console.log(err))
    }
    },[categories, product])


  return (
    <section>
        {
            productsByCategory.map(productsByCategory => <ProductCart product={productsByCategory} key={productsByCategory.id} /> )
        }
    </section>
  )
}

export default SimilarProducts