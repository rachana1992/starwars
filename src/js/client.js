import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import '../css/bootstrap.css';

import rootReducers from './reducers/Reducers'
import Layout from "./components/Layout";

const app = document.getElementById('app')

const store = createStore(rootReducers, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);

