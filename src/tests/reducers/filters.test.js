import filtersReducer from "../../reducers/filters";
import moment from 'moment';

test('should setup default filter values', () => {
   const state = filtersReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy date', () => {
   const defaultState = {
       text: '',
       sortBy: 'amount',
       startDate: undefined,
       endDate: undefined
   };
   const action = {
       type: 'SORT_BY_DATE'
   };
   const newState = filtersReducer(defaultState, action);
   expect(newState.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    };
   const state = filtersReducer(undefined, action);
   expect(state.text).toBe('test');
});

test('Should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: moment().startOf('month').add(2, 'days')
    };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(action.date);
});

test('Should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment().startOf('month').add(2, 'weeks')
    };

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(action.date);
});
