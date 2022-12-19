import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../redux/root-reducer";
import { rootSaga } from "../redux/root-saga";


const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(middleWares),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
