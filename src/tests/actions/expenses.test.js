import * as expenseActions from '../../actions/expenses';

test('Should setup add expense action object with provided values', () => {
    const expense = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'test note'
    };
    const action = expenseActions.addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense, //spread out the expense values above to this new object
            id: expect.any(String) //assert that id is populated and is of type string
        }
    });

});

test('Should setup add expense action object with default values', () => {
    const defaultExpense = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = expenseActions.addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...defaultExpense,
            id: expect.any(String)
        }
    })
});

test('Should setup edit expense object', () => {
    const expenseUpdates = {
        note: 'new note test'
    };
    const action = expenseActions.editExpense('testing123', expenseUpdates);
    expect(action).toEqual({
       type: 'EDIT_EXPENSE',
       id:'testing123',
       updates: {
           note: 'new note test'
       }
    });
});

test('Should setup remove expense object', () => {
    const action = expenseActions.removeExpense({id: 'testing123'});
    expect(action).toEqual({ //toEqual goes over arrays or objects to compare their properties and see if they're the same
        type: 'REMOVE_EXPENSE',
        id: 'testing123'
    });
});
