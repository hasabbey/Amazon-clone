import React, { useContext } from 'react';
import LayOut from '../../Components/LayOut/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import classes from '../Cart/Cart.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Type } from '../../Utility/ActionType';

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: item,
    });
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: id
    })
  }

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            basket.map((item, i) => (
              <section key={i} className={classes.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={() => increment(item)}>
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type='checkbox' />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  )
}

export default Cart;

