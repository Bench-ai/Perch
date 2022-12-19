import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { ROUTE_AUTH_LOGIN } from '../../constants';
import {useSelector} from "react-redux";
import { selectCurrentToken } from '../../redux/auth/auth.selector';

const ProtectedRoutes = () => {
    const token = useSelector(selectCurrentToken);

    return (
        token ? <Outlet/> : <Navigate to={ROUTE_AUTH_LOGIN} />
    )
}

export default ProtectedRoutes;