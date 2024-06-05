import React from 'react'
import Layout from '../../Components/LayOut/Layout'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import Carousel from '../../Components/Carousel/Carousel'
const Landing = () => {
  return (
    <Layout>
       < Carousel/>
       <Category/>
        <Product/> 
    </Layout>
  )
}

export default Landing
