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
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}/>
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
        addExpense: (expense) => dispatch(expenseActions.addExpense(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
