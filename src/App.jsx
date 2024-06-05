
import React, { useEffect, useContext } from 'react';
import './App.css';
import Routing from '../src/Router.jsx';
import {DataContext} from '../src/Components/DataProvider/DataProvider.jsx';
import {auth} from '../src/Utility/Firebase.jsx';
import {Type} from '../src/Utility/ActionType.jsx';






function App() {
 
const [user, dispatch] = useContext(DataContext)

   useEffect(() =>{

auth.onAuthStateChanged((authUser) => {
  if (authUser) {
    dispatch({
      type: Type.SET_USER,
      user: authUser
    })
  } else {
    dispatch({
      type: Type.SET_USER,
      user: null
    })
  }
})


   },[])




   
    
    return  <Routing />;
    
  
}

export default App;
