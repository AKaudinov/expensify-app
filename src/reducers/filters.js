//filters reducer
import moment from "moment";


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf("month"),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state, //grab all the previous properties on the object and add them to this new object
                text: action.text //overwrite the previous assigned properties just above
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

export default filtersReducer;
