import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import  './Product.css';
import Loader from "../../Components/Loader/Loader";

function Product() {
  const[product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
   setLoading(true)
   axios.get("https://fakestoreapi.com/products")
   .then((res) => {
       setProduct(res.data)
       setLoading(false)
   }).catch((err) => {
       console.log(err)
       setLoading(false)
   })
  }, [])
 return (
   <>
   {
   loading ? <Loader/> : (<section className='products_container'>
           {
               product?.map((SingleProduct) => {
               return <ProductCard renderAdd={true} product ={SingleProduct} key = {SingleProduct.id}/>
                   })
           }
   </section>)
   }
       
   </>
 )
}

export default Product



1820.04
8739.06


























// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(res => {
//         setProducts(res.data);
//         setIsLoading(false); // Set isLoading to false when data is fetched
//       })
//       .catch(err => {
//         console.log(err);
//         setIsLoading(false); // Set isLoading to false in case of error
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader /> // Show loader while data is being fetched
//       ) : (
//         <section className='products_container'>
//           {products?.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// };

// export default Product;
