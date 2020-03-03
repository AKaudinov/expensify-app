import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Link, NavLink, Route} from 'react-router-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase'; //execute firebase


const store = configureStore(); //gives access to the whole store

// store.dispatch(expenseActions.addExpense({description: 'Rent', amount: 1600, createdAt: 1000})); //dispatch returns the object it dispatched
// store.dispatch(expenseActions.addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
// store.dispatch(expenseActions.addExpense({description: 'Car', amount: 400, createdAt: 1200}));
// store.dispatch(filterActions.setTextFilter('coffee'));
//
// setTimeout(() => {
//     store.dispatch(filterActions.setTextFilter('Rent'));
// }, 3000);

//Provider component is a higher order component that enables all child components to connect to the store
const provider = ( //store = to our redux store defined above
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<h4>Loading...</h4>, document.querySelector("#app"));

store.dispatch(expenseActions.startGetExpenses()).then(() => {
    ReactDOM.render(provider, document.querySelector("#app"));
});

// ReactDOM.render(provider, document.querySelector("#app"));
//app.js just bootstraps the app

