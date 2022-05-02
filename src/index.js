import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import {Provider} from 'react-redux';



    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
       document.getElementById('root')
    );


// store.subscribe( () => {
//   rerenderEntireTree()
// });

//state={store.getState()}   // куда деть эти три строки, чтоб остальное при этом никуда не делось???!
        //dispatch={store.dispatch.bind(store)} 
        //store={store}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
