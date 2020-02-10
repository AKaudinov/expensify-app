import React from 'react';
import {connect} from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from "../selectors/expenses";
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, totalExpenses}) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
      <div>
          <h4>Viewing {expenseCount} {expensesWord}: {numeral(totalExpenses / 100).format('$0,0.00')}</h4>
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
