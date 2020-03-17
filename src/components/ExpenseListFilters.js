import React from 'react';
import {connect} from 'react-redux';
import * as filterActions from '../actions/filters';
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{
    state={
      calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        // this.props.dispatch(filterActions.setStartDate(startDate));
        // this.props.dispatch(filterActions.setEndDate(endDate));
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = calendarFocused => {
        this.setState(prevState => ({
            calendarFocused: calendarFocused
        }));
    };

    onTextChange = (e) =>{
        // this.props.dispatch(filterActions.setTextFilter(e.target.value))
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = e => {
        if(e.target.value === 'date'){
            // this.props.dispatch(filterActions.sortByDate())
            this.props.sortByDate();
        }else if(e.target.value === 'amount'){
            // this.props.dispatch(filterActions.sortByAmount())
            this.props.sortByAmount();
        }
    };

    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Search expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy} //controlled input - value controlled by JavaScript
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={day => false}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(filterActions.setTextFilter(text)),
    sortByDate: () => dispatch(filterActions.sortByDate()),
    sortByAmount: () => dispatch(filterActions.sortByAmount()),
    setStartDate: startDate => dispatch(filterActions.setStartDate(startDate)),
    setEndDate: endDate => dispatch(filterActions.setEndDate(endDate))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
