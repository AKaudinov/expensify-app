import React from 'react';
import {connect} from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({totalExpenses}) => {
    return (
      <div>
          <h4>Total expenses: {numeral(totalExpenses / 100).format('$0,0.00')}</h4>
      </div>
    );
};

const mapStateToProps =  (state) => {
    return {
        totalExpenses: getTotalExpenses(state.expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
