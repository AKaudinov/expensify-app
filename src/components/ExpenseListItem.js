//export a stateless functional component
//description, amount, createdAt
import React from 'react';

const ExpenseListItem = ({expense}) => { //destructure expense from props, it comes in as props.expense
    return (
      <div>
          <h1>{expense.description}</h1>
          <h2>amount: {expense.amount}</h2>
          <h3>createdAt: {expense.createdAt}</h3>
      </div>
    );
};

export default ExpenseListItem;
