//export a stateless functional component
//description, amount, createdAt
import React from 'react';
import {connect} from 'react-redux';
import * as ExpenseActions from '../actions/expenses';

const ExpenseListItem = ({expense, dispatch}) => { //destructure expense from props, it comes in as props.expense
    return (
      <div>
          <h1>{expense.description}</h1>
          <h2>amount: {expense.amount}</h2>
          <h3>createdAt: {expense.createdAt}</h3>
          <button onClick={() => {dispatch(ExpenseActions.removeExpense(expense))}}>Remove Expense</button>
      </div>
    );
};

const connectedListItem = connect()(ExpenseListItem);
export default connectedListItem;
