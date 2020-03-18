import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => { //non connected export so it can be used in test cases
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {/*<h1>Expense List: </h1>*/}
            {
                props.expenses.length === 0
                    ? (<div className="list-item--message">
                        <span>No expenses</span>
                       </div>)
                :(props.expenses.map(expense =>
               (<ExpenseListItem
                expense={expense}
                key={expense.id}/>)))
            }
            </div>
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
