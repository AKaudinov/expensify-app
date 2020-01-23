import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = (props) => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);


export default ExpenseDashboard;
