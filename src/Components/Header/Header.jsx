import React, { useContext } from 'react';
import { SlLocationPin } from "react-icons/sl";
import classes from './Header.module.css';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import LowerHeader from '../../Components/Header/LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { BiCartAdd } from "react-icons/bi";
import {auth} from '../../Utility/Firebase';

const Header = () => {
   const [{ basket, user }, dispatch] = useContext(DataContext);
   const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
   }, 0);
   
  return (
    <section className={classes.fixed}>
      <section>
        <section>
          <div className={classes.header_container}>
            {/* logo section */}
            <div className={classes.logo_container}>
              <div className={classes.delvery}>
                <div className={classes.logo_one}>             
                  <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                  </Link>
                </div>
                <div className={classes.delvery_container}>
                  <p className={classes.delivered}>
                    <span><SlLocationPin /></span>Delivered to Update location
                  </p>
                  {/* <p className={classes.usa}> USA</p> */}
                </div>
              </div>
            </div>
            
            <div className={classes.search}>
              {/* search bar */}
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name='' id='' placeholder='Search Amazon' />
              <BsSearch size={35} className={classes.search_icon} />
            </div>
            
            <div className={classes.order_container}>
              {/* Language selection */}
              <div className={classes.language}>
                <img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="usa flag" />
                <select>
                  <option value="">EN</option>
                </select>
              </div>
              {/* Sign In / Account & Lists */}
              <Link to={!user && "/auth"}>
                <div className={classes.signin}>

                  {user ? (
                  <>
                  <p>Hello {user?.email?.split('@')[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                  ) : (
                    <>
                    <p> Hello, Sign In</p>
                    <span>Account & Lists</span>
                    </>
                    
                  )}
               
                                  
                </div>
              </Link>
              {/* Returns & Orders */}
              <Link to="/orders">
                <div className={classes.returns}>
                  <p>Returns</p>
                  <span>& Orders</span>
                </div>
              </Link>
              {/* Cart */}
              <div className={classes.cart_container}>
                <Link to="/cart" className={classes.cart}>
                  <BiCartAdd size={35} />
                  <p>Cart</p>
                  <span>{totalItems}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <LowerHeader/> 
    </section>
  );
}

export default Header;



