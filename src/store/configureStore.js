//Store creation
import {combineReducers, createStore, applyMiddleware, compose} from "redux"; //middleware lets you apply middleware to the store, like redux-thunk
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import reduxThunk from 'redux-thunk'; //import redux thunk

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose; //use devtools or just a standard compose

export default () => {
    return createStore( //return the created store
        combineReducers({
            expenses: expensesReducer, //root state name and the value that is supposed to manage that portion of the state
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(reduxThunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enable redux dev tools
    );

    // return store;
};


