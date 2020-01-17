//Store creation
import {combineReducers, createStore} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
    return createStore( //return the created store
        combineReducers({
            expenses: expensesReducer, //root state name and the value that is supposed to manage that portion of the state
            filters: filtersReducer
        })
    );

    // return store;
};


