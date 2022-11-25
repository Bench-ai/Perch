import React from 'react';
import NavBar from "../views/navbar/navbar";
import {Routes, Route} from "react-router";
import {AppContainer} from "./App.styles";
import {ROUTE_AUTH_LOGIN} from "../constants/router.constants";
import Login from "../views/login/login";

const App = () => {
    return (
        <AppContainer>
            <NavBar/>
            <br/>
            <Routes>
                <Route path={ROUTE_AUTH_LOGIN} element={<Login/>}/>
            </Routes>
        </AppContainer>
    );
}

export default App;
