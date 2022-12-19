import React, {StrictMode} from 'react';
import {createRoot} from "react-dom/client";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {store} from "./app/store";
import App from "./app/App";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);


root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
