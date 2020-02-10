//export a stateless functional component
//description, amount, createdAt
import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as ExpenseActions from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

//named export so it can be used for testing without being connected to redux store
export const ExpenseListItem = ({expense, dispatch}) => { //destructure expense from props, it comes in as props.expense
    return (
      <div>
          <Link to={`edit/${expense.id}`}><h2>{expense.description}</h2></Link>
          <h2>amount: {numeral(expense.amount / 100).format('$0,0.00')}</h2>
          {/*convert expense.amount / 100 from cents to actual decimals*/}
          <h3>createdAt: {moment(expense.createdAt).format('MM/DD/YYYY')}</h3>
      </div>
    );
};

const connectedListItem = connect()(ExpenseListItem);
export default connectedListItem;
