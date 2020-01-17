import React from 'react';
import {connect} from "react-redux";

const ExpenseList = (props) =>{
    return (
        <div>
            <h3>filter: {props.filters.text}</h3>
            <h1>Expense List {props.expenses.length}</h1>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        expenses: state.expenses, //grabs the information from the store, information that our reducers return, in this case, expenses reducer
        filters: state.filters //grabs filters from the filters reducer
    }
};

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses //grabs the information from the store, information that our reducers return, in this case, expenses reducer
//     }
// })(ExpenseList);

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList); //connect() returns a function that you need to call
export default ConnectedExpenseList;

// OR:


// export default connect(mapStateToProps)(ExpenseList); //connect() returns a function that you need to call
