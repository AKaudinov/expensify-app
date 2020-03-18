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
          <Link className="list-item" to={`edit/${expense.id}`}>
              <div>
                  <h3 className="list-item__title">{expense.description}</h3>
                  <span className="list-item__sub-title">created at: {moment(expense.createdAt).format('MM/DD/YYYY')}</span>
              </div>
              <h3 className="list-item__data">{numeral(expense.amount / 100).format('$0,0.00')}</h3>
              {/*convert expense.amount / 100 from cents to actual decimals*/}
          </Link>
    );
};

const connectedListItem = connect()(ExpenseListItem);
export default connectedListItem;
