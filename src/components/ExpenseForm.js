import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '', //convert the number to a number with cents by dividing by 100
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error:''
        };
    }

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
      this.setState(prevState => {
         return {
             note: note //don't use e.target.value right in the callback without using e.persist(),
             //since this callback doesn't run right away, and by that time, e.target.value is lost
         }
      });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //only see numbers that might have a decimal point, and a max of 2 numbers afterwards
            this.setState(prevState => ({
                amount: amount
            }));
        }
    };

    onDateChange = (createdAtMomentDate) => {
        if(createdAtMomentDate) { //if a data is actually passed in, set the state
            this.setState(prevState => {
                return {
                    createdAt: createdAtMomentDate
                }
            })
        }
    };

    onFocusChange = ({focused}) => { //destructure the first argument(focused) that gets passed in as part of an object
        this.setState(prevState => ({
            calendarFocused: focused
        }))
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            //set error state equal to 'Please provide description and amount'
            this.setState(prevState => {
                return{
                    error: 'Please provide description and amount'
                }
            })
        }else{
            //clear the error
            this.setState(prevState => ({
                error: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, //format the number correctly
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render(){
        return (
            <div>
                {this.state.error && <h4>{this.state.error}</h4>}
              <form onSubmit={this.onSubmitForm}>
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

                  <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={day => false}/>

                  <textarea
                      placeholder="Add a note for your expense (optional)"
                      value={this.state.note}
                      onChange={this.onNoteChange}>
                  </textarea>

                  <button>Save expense</button>

              </form>
            </div>
        )
    }
}
