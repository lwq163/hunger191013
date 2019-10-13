import {createStore,applyMiddleware}from 'redux'
import render from "./render"
import thunk from "redux-thunk"
const store=createStore(render,applyMiddleware(thunk))

window.store = store;

export default store