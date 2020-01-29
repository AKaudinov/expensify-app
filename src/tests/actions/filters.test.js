import * as filterActions from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter action object', () => {
    const action = filterActions.setTextFilter('test');
    expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: 'test'
    });
});

test('should generate set text filter action object default value', () => {
    expect(filterActions.setTextFilter()).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
    });
});

test('should generate sort by date filter action object', () => {
   expect(filterActions.sortByDate()).toEqual({
       type: 'SORT_BY_DATE'
   });
});

test('should generate sort by amount filter action object', () => {
   expect(filterActions.sortByAmount()).toEqual({
       type: 'SORT_BY_AMOUNT'
   });
});

test('should generate set start date action object', () => {
    const action = filterActions.setStartDate(moment(0)); //0 is the start of the equinox epoch
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
});

test('should generate set end date action object', () => {
const action = filterActions.setEndDate(moment(0)); //set a fixed time, since this will be executed when the test runs, and time changes
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })

});
