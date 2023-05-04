import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Provider/AuthProvider';

const PrivateRout = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    

    if(loading){
       return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRout;