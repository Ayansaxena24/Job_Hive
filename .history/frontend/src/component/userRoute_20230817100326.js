import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {

    const { userInfo } = UseSelector((state) => state.signin);
    return userInfo ? children : <Navigate to = "/" />

}

export default UserRoute
