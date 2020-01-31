//export a stateless functional component
//description, amount, createdAt
import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as ExpenseActions from '../actions/expenses';


//named export so it can be used for testing without being connected to redux store
export const ExpenseListItem = ({expense, dispatch}) => { //destructure expense from props, it comes in as props.expense
    return (
      <div>
          <Link to={`edit/${expense.id}`}><h2>{expense.description}</h2></Link>
          <h2>amount: {expense.amount}</h2>
          <h3>createdAt: {expense.createdAt}</h3>
      </div>
    );
};

const connectedListItem = connect()(ExpenseListItem);
export default connectedListItem;
