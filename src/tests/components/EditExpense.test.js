import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, match, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    match = {
        params: {
            id: expenses[0].id
        }
    };

    wrapper = shallow(<EditExpense
        expense={expenses[0]}
        editExpense={editExpense}
        removeExpense={removeExpense}
        match={match}
        history={history}/>)
});


test('should render EditExpense correctly', () =>{
   expect(wrapper).toMatchSnapshot();
});


test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});


test('should handle removeExpense', () =>{
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0]);
});
