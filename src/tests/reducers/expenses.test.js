import expensesReducer from "../../reducers/expenses";
import moment from 'moment'
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

test('should set default state to', () => {
   const state = expensesReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[0].id
    };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([ //the array should not contain the first expense anymore, as it has been removed
       expenses[1],
       expenses[2]
   ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
   const expense = {
       id: uuid(),
       description: 'test expense',
       note: '',
       amount: 2362300,
       createdAt: moment().valueOf()
   };
   const action = {
     type: 'ADD_EXPENSE',
     expense: expense
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, expense]) //spread out all the original expenses, and then attach the new one to it,
    //then compare the state to this array, last item being equal to the new expense we created
});

test('should edit an expense', () => {
    const payload = {
        id: expenses[0].id,
        updates:{
            note: 'test note'
        }
    };
    const action = {
        type: 'EDIT_EXPENSE',
        ...payload
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(payload.updates.note)
});

test('should not edit an expense if expense id not found', () => {
    const payload = {
        id: -1,
        updates:{
                note: 'test note'
            }
    };
    const action = {
        type: 'EDIT_EXPENSE',
        ...payload
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); //original state array must match the default array,
    //jest compares objects as well via toEqual
});

