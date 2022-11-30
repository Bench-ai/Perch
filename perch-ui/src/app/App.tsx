import React from 'react';
import NavBar from "../views/navbar/navbar";
import {Routes, Route} from "react-router";
import {AppContainer} from "./App.styles";
import {ROUTE_AUTH_LOGIN, ROUTE_AUTH_SIGNUP} from "../constants/router.constants";
import Login from "../views/login/login";
import Signup from "../views/signup/signup";

const App = () => {
    return (
        <AppContainer>
            <NavBar/>
            <br/>
            <Routes>
                <Route path={ROUTE_AUTH_LOGIN} element={<Login/>}/>
                <Route path={ROUTE_AUTH_SIGNUP} element={<Signup/>}/>
            </Routes>
        </AppContainer>
    );
}

export default App;
