import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const stripePromise = loadStripe (import.meta.env.VITE_PUBLISHABLE__KEY);

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
               msg={"Please login to checkout"}
                redirect={"/payment"} 
              >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              </ProtectedRoute>
            }
          />

          
          <Route path="/orders" element={
          
          <ProtectedRoute
               msg={"Please login to your account"}
                              redirect={"/orders"} 
                               >
          <Orders />

          </ProtectedRoute>
          } />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;



