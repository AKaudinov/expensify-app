import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import * as expenseActions from '../actions/expenses';

const EditExpense = (props) => {
    return (
    <div>
        <ExpenseForm
            expense={props.expense}
        onSubmit={expenseObj => {
            props.dispatch(expenseActions.editExpense(props.match.params.id, expenseObj));
            props.history.push('/');
        }}/>
        <button onClick={() => {
            props.dispatch(expenseActions.removeExpense(props.expense));
            props.history.push('/');
        }}>Remove Expense</button>
    </div>
    );
};

const mapStateToProps = (state, props) => { //find the expense with the given id from the passed in url
    return {
      expense: state.expenses.find(expenseItem => expenseItem.id === props.match.params.id) //search through the array and find the single item)
    };
};

const connectedEditExpense = connect(mapStateToProps)(EditExpense);
export default connectedEditExpense;
