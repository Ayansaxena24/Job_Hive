import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

const userRoute = ({ children }) => {
    // <div>userRoute</div>;
    const { userInfo } = useSelector((state) => state.signin);
    return userInfo ? chidren : <Navigate to = "/" />

}

