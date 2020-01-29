import React from 'react';
import {connect} from 'react-redux';
import * as filterActions from '../actions/filters';
import {DateRangePicker} from 'react-dates';


class ExpenseListFilters extends React.Component{
    state={
      calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(filterActions.setStartDate(startDate));
        this.props.dispatch(filterActions.setEndDate(endDate));
    };

    onFocusChange = calendarFocused => {
        this.setState(prevState => ({
            calendarFocused: calendarFocused
        }));
    };

    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(filterActions.setTextFilter(e.target.value)) //dispatch the change, so the reducer can intercept it and update the redux store
                }}/>
                <select
                    value={this.props.filters.sortBy} //controlled input - value controlled by JavaScript
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            this.props.dispatch(filterActions.sortByDate())
                        }else if(e.target.value === 'amount'){
                            this.props.dispatch(filterActions.sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
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
        );
    }
}

const mapStateToProps = (state) => {
  return{
    filters: state.filters
  };
};

// const mapDispatchToProps = () => {
//
// };


export default connect(mapStateToProps)(ExpenseListFilters);
