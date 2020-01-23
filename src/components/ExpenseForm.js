import React from 'react';
import {connect} from 'react-redux'
import * as ExpenseActions from '../actions/expenses';

export default class ExpenseForm extends React.Component{
    state = {
      description: '',
      amount: '',
        note: ''
    };

    onDescriptionChange = (e) =>{
      const description = e.target.value;
      this.setState(state => {
          return {
              description: description
          }
      });
    };

    onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(state => {
         return {
             note: note //don't use e.target.value right in the callback without using e.persist(),
             //since this callback doesn't run right away, and by that time, e.target.value is lost
         }
      });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(amount.match(/^\d*(\.\d{0,2})?$/)){ //only see numbers that might have a decimal point, and a max of 2 numbers afterwards
            this.setState(state => ({
                amount: amount
            }));
        }
    };

    render(){
        return (
            <div>
              <form>
                  <input
                  type="text"
                  placeholder="Description"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDescriptionChange}/>

                  <input
                  type="text"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}/>

                  <textarea
                      placeholder="Add a note for your expense (optional)"
                      value={this.state.note}
                      onChange={this.onNoteChange}>
                  </textarea>

                  <button>Add Expense</button>

              </form>
            </div>
        )
    }
}
