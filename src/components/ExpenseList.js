import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) =>{
    return (
        <div>
            <h1>Expense List: </h1>
            {props.expenses.map(expense =>
               (<ExpenseListItem
                expense={expense}
                key={expense.id}/>))}
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters), //grabs the information from the store, information that our reducers return, in this case, expenses reducer
        filters: state.filters //grabs filters from the filters reducer
    }
};

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses //grabs the information from the store, information that our reducers return, in this case, expenses reducer
//     }
// })(ExpenseList);

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList); //connect() returns a function that you need to call
export default ConnectedExpenseList;

// OR:


// export default connect(mapStateToProps)(ExpenseList); //connect() returns a function that you need to call
