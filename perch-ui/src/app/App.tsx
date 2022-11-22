import React from 'react';
import NavBar from "../views/navbar/navbar";
import {Routes, Route} from "react-router";
import {AppContainer} from "./App.styles";

const App = () => {
    return (
        <AppContainer>
            <NavBar/>
            <Routes>
                <Route/>
            </Routes>
        </AppContainer>
    );
}

export default App;
