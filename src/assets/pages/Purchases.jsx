import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCart from '../../components/purchases/PurchaseCart'
import { getConfig } from '../../utils/configAxios'
import "./styles/purchases.css"



const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const URL="https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    axios.get(URL, getConfig())
    .then(res=> {
      const newPurchase = res.data.data.purchases.sort((a, b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      setPurchases(res.data.data.purchases)})
    .catch(err=>console.log(err))
  
  
  },[])
  



  return (
    <main className='purchases'>
      <h2>My purchases</h2>
      <section className='purchases__list'>
        {
          purchases.map(purchase => <PurchaseCart key={purchase.id} purchase={purchase}/>)
        }
      </section>
    </main>
  )
}

export default Purchases