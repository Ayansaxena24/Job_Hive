import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    // <div>userRoute</div>;
    const { userInfo } = useSelector((state) => state.signin);
    return userInfo ? children : <Navigate to = "/" />

}

export default userRoute
