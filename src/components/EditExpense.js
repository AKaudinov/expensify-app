import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import * as expenseActions from '../actions/expenses';

export class EditExpense extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
      this.props.removeExpense(this.props.expense);
      this.props.history.push('/');
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}/>
                <button className="standard-button secondary-button" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
}

// const EditExpense = (props) => {
//     return (
//     <div>
//         <ExpenseForm
//             expense={props.expense}
//         onSubmit={expenseObj => {
//             props.dispatch(expenseActions.editExpense(props.match.params.id, expenseObj));
//             props.history.push('/');
//         }}/>
//         <button onClick={() => {
//             props.dispatch(expenseActions.removeExpense(props.expense));
//             props.history.push('/');
//         }}>Remove Expense</button>
//     </div>
//     );
// };

const mapStateToProps = (state, props) => { //find the expense with the given id from the passed in url
    return {
      expense: state.expenses.find(expenseItem => expenseItem.id === props.match.params.id) //search through the array and find the single item)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      editExpense: (id, expense) => dispatch(expenseActions.startEditExpense(id, expense)),
        removeExpense: (expense) => dispatch(expenseActions.startRemoveExpense(expense))
    }
};

const connectedEditExpense = connect(mapStateToProps, mapDispatchToProps)(EditExpense);
export default connectedEditExpense;
