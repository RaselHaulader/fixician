import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const user = useSelector(state=> state.user.userAuth)
    let location = useLocation();

  
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}

export default RequireAuth;