// import React ,{useContext,useEffect}from 'react'
// import { useNavigate } from 'react-router-dom'
// import { DataContext } from '../../Components/DataProvider/DataProvider'

// const ProtectedRoute = ({children ,msg, redirect})=> {

//     const navigate = useNavigate()

//     const [{user},dispatch] = useContext(DataContext)

//     useEffect(() => {
//         if(!user){
//             navigate("/auth",{state:{msg}})
//         }
//     }, [user])
//   return (
//     children
//   )
// }



// // pyment ---> /auth(/)
// export default ProtectedRoute

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Components/DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect }) => {
    const navigate = useNavigate();
    const [{ user }, dispatch] = useContext(DataContext);

    useEffect(() => {
        if (!user) {
            navigate('/auth', {state:{ msg } });
        }
    }, [user, navigate, msg]);

    return children;
};

export default ProtectedRoute;
