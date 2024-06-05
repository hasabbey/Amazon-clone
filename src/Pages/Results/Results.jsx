import React, { useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/Layout'
import classes from './Results.module.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'

import ProductCard from '../../Components/Product/ProductCard'

const Results = () => {
 
  const {categoryName} = useParams()
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) =>{
    console.log(res)
    setResults(res.data)
     
    setIsLoading(false)  
     
  }).catch((err) =>{
    setIsLoading(false)
    console.log(err)
    setIsLoading(false)
  }

  )
  }, [])
  
  return (
    <LayOut>
      <section>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding: '30px'}}>Category/{categoryName}</p>
        <hr/>
      
        {isLoading ?( <div>Loader</div>):(
                         
    <div className={classes.products_container}>
      {results?.map((product) => (
        <ProductCard key={product.id} 
        renderDesc={false}
        renderAdd={true}
        
        product={product} />
      ))}
      
    </div>
        )}
    </section>
</LayOut>
  );
};

export default Results
