import React                                                      from "react";
import ReactDOM                                                   from "react-dom";
import { BrowserRouter }                                          from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider }                                               from "react-redux";
import thunk                                                      from "redux-thunk";
import logger                                                     from "redux-logger";
import * as serviceWorker                                         from "./serviceWorker";
import reducers                                                   from "./store/reducers";
import App                                                        from "./App";
import "./index.css";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
    ),
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
