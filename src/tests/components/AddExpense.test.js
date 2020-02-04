import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";


//define 3 variables
let addExpense, history, wrapper;

beforeEach(() => { //execute this function before each test case
   addExpense = jest.fn();
   history = {push: jest.fn()};

   wrapper = shallow(<AddExpense addExpense={addExpense} history={history}/>);
});


test('should render AddExpense page correctly', () => {
   expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});


