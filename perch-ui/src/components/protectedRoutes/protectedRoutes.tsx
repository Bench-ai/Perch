import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { ROUTE_AUTH_LOGIN } from '../../constants';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');

    return (
        token ? <Outlet/> : <Navigate to={ROUTE_AUTH_LOGIN} />
    )
}

export default ProtectedRoutes;