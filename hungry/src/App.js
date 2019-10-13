import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import FnRoute from "./router/fnRouter"
import route from "./router/route"
import {Provider} from "react-redux"
import store from "./store/store"
import "./css/style.css"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FnRoute route={route}></FnRoute>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
