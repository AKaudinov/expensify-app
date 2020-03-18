import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Link, NavLink, Route} from 'react-router-dom';
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import * as authActions from './actions/auth';
import getVisibleExpenses from "./selectors/expenses";
import Loading from './components/Loading';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase'; //execute firebase
import {firebase} from './firebase/firebase';

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

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
      ReactDOM.render(provider, document.querySelector("#app"));
      hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.querySelector("#app"));



//this executes when the authenticate state changes, like when somebody logging in or logging out
firebase.auth().onAuthStateChanged((user) => { //this runs each time the user visits the page for the first time
   if(user){
       store.dispatch(authActions.login(user.uid));
       store.dispatch(expenseActions.startGetExpenses()).then(() => {
           renderApp();
           if(history.location.pathname === '/'){ //if the user is currently on the login page, only then push them to the dashboard page
              history.push('/dashboard');
           }
       });

   } else{
       store.dispatch(authActions.logout());
       renderApp();
       history.push('/'); //use the exported history to push to the user to the home login page
   }
});


// ReactDOM.render(provider, document.querySelector("#app"));
//app.js just bootstraps the app

