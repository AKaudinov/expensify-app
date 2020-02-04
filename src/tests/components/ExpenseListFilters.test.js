import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import * as expenseFilters from '../fixtures/filters';
import {altFilters} from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilters
        filters={expenseFilters.filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
});

test('should render ExpenseListFilters correctly', () => {
   expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilters with alt data correctly', () => {
    //change the props on the enzyme wrapped component via setProps
    wrapper.setProps({
       filters: expenseFilters.altFilters
    });
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
    const text = 'test';
    wrapper.find('input').simulate('change', {
            target: {
                value: text
            }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
   const value = 'date';
   wrapper.find('select').simulate('change', {
       target: {
           value: value
       }
   });
   expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const dates = {
        startDate: expenseFilters.altFilters.startDate,
        endDate: expenseFilters.altFilters.endDate
    };
    wrapper.find('DateRangePicker').prop('onDatesChange')(dates);

    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';

    expect(wrapper.state('calendarFocused')).toBe(null);

    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
