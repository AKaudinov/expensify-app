import React from 'react';
import {connect} from 'react-redux';
import * as filterActions from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
      <input type="text" value={props.filters.text} onChange={(e) => {
          props.dispatch(filterActions.setTextFilter(e.target.value)) //dispatch the change, so the reducer can intercept it and update the redux store
      }}/>
      <select
          value={props.filters.sortBy} //controlled input - value controlled by JavaScript
          onChange={(e) => {
          if(e.target.value === 'date'){
              props.dispatch(filterActions.sortByDate())
          }else if(e.target.value === 'amount'){
              props.dispatch(filterActions.sortByAmount())
          }
      }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
      </select>
  </div>
);

const mapStateToProps = (state) => {
  return{
    filters: state.filters
  };
};

// const mapDispatchToProps = () => {
//
// };


export default connect(mapStateToProps)(ExpenseListFilters);
