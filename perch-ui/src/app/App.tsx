import React from 'react';
import NavBar from "../views/navbar/navbar";
import {Routes, Route} from "react-router";
import {AppContainer} from "./App.styles";
import Login from "../views/login/login";
import Signup from "../views/signup/signup";
import ProtectedRoutes from "../components/protectedRoutes/protectedRoutes";
import {
    ROUTE_ACCESS_DENIED,
    ROUTE_ANY,
    ROUTE_AUTH_LOGIN,
    ROUTE_AUTH_SIGNUP,
    ROUTE_HOME_DEFAULT,
    ROUTE_SERVICE_DASHBOARDS,
    ROUTE_SERVICE_PROFILE,
    ROUTE_UNAUTHORIZED
} from "../constants";
import {Error401, Error403, Error404} from "../views/error/error";
import Profile from "../views/profile/profile";
import Home from '../views/home/home';

const App = () => {
    return (
        <AppContainer>
            <NavBar/>
            <br/>
            <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route path={ROUTE_SERVICE_DASHBOARDS} />
                    <Route path={ROUTE_SERVICE_PROFILE} element={<Profile/>} />
                </Route>
                <Route path={ROUTE_HOME_DEFAULT} element={<Home/>} />
                <Route path={ROUTE_AUTH_LOGIN} element={<Login/>} />
                <Route path={ROUTE_AUTH_SIGNUP} element={<Signup/>} />
                <Route path={ROUTE_UNAUTHORIZED} element={<Error401/>} />
                <Route path={ROUTE_ACCESS_DENIED} element={<Error403/>} />
                <Route path={ROUTE_ANY} element={<Error404/>} />
            </Routes>
        </AppContainer>
    );
}

export default App;
