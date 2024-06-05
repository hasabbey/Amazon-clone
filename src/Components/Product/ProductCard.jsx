import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import './Product.css';
import {DataContext} from '/src/Components/DataProvider/DataProvider.jsx';
import { Type } from '../../Utility/ActionType';
import { Link } from 'react-router-dom';

function ProductCard({product, flex, renderDesc, renderAdd}) {
  if (!product) return null;
  const {image,title, id, rating, price, description} = product;
  
  const [state,dispatch] = useContext(DataContext); 

  console.log(state)

  const addToCart = () => {
    
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,title, id, rating, price, description,
      },
    });
  }

  return (
    <div className={`card_container ${flex ? 'product_flex' : ''}`}>
      <Link to={`/products/${id}`}>
      <img src={image} alt="" className="img__container" />
{/* corrected class name */}
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className='rating'> {/* corrected class name */}
          <Rating value={rating?.rate} precision={0.1}/>
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        
        { renderAdd && <button className='button' onClick={addToCart}> add to cart</button>} {/* corrected class name */}
      </div>
    </div>
  );
}

export default ProductCard;
