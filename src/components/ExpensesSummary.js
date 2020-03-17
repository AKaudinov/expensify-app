import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from "../selectors/expenses";
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, totalExpenses}) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
      <div className="page-header">
          <div className="content-container">
              <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expensesWord}: <span>{numeral(totalExpenses / 100).format('$0,0.00')}</span></h1>
          <div className="page-header__actions">
              <Link className="standard-button" to="/create">Add Expense</Link>
          </div>
          </div>
      </div>
    );
};

const mapStateToProps =  (state) => {
    return {
        expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
        totalExpenses: getTotalExpenses(getVisibleExpenses(state.expenses, state.filters))
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
