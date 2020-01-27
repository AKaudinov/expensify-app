import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import * as expenseActions from '../actions/expenses';

const AddExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
        onSubmit={(expenseObj) => {
            props.dispatch(expenseActions.addExpense(expenseObj));
            props.history.push('/'); //redirect back to the dashboard page, which in this case is home page
        }}/>
    </div>
);


export default connect()(AddExpense);
