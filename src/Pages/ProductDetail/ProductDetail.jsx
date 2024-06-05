
import React, {  useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/Layout'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoints'
import axios from 'axios'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'


const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams()
  
  

 
  useEffect(() => {
    setIsLoading(true)

    axios.get(`${productUrl}/products/${productId}`)
    .then(res => {
     console.log(res.data)
     setProduct(res.data)
     setIsLoading(false)
     console.log(res.data)
    })
    .catch(err => {
      
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  console.log(product)  
  return (
    <LayOut>
      {isLoading ? (<Loader/>) :(<ProductCard 
      product={product} 
      flex={true}
      renderDesc={true}
      renderAdd={true}
      />)}  
      
       
    
    
    </LayOut>
  )
}

export default ProductDetail

