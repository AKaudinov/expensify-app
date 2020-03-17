import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import * as expenseActions from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

// const AddExpense = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//         onSubmit={(expenseObj) => {
//             //props.dispatch(expenseActions.addExpense(expenseObj));
//             props.addExpense(expenseObj);
//             props.history.push('/'); //redirect back to the dashboard page, which in this case is home page
//         }}/>
//     </div>
// );

//similar to state to props
const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(expenseActions.startAddExpense(expense))
        // (expense) => dispatch(expenseActions.addExpense(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
