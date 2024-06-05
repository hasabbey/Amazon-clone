import React, { useContext, useState, useEffect } from 'react';
import LayOut from '../../Components/LayOut/Layout';
import classes from '../Orders/Orders.module.css';
import {db} from '../../Utility/Firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';


 const Orders = () => {

  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }else{
      setOrders([])
    }
    
  }, [])
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>
            <h6>Your Acount </h6>
            Your Orders
          </h2>
          {
            orders?.length === 0 && <p style={{padding: "20px", fontSize: "15px",textAlign :"left ", color: "rgb(130, 130, 161)"}}>You don't have any orders.</p>
          }
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, index) => { 
              return (
                <div key={index}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {
                    eachOrder?.data?.basket?.map((eachItem) => {
                      return (
                        <ProductCard
                          flex={true}
                          Product={eachItem}
                          key={eachItem.id}
                        />
                      );
                    }
                    )
                  }
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );

 }

export default Orders;

