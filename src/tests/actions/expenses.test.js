import * as expenseActions from '../../actions/expenses';
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';     //mocking redux store via redux-mock-store
import reduxThunk from 'redux-thunk';
import fireBaseDb from '../../firebase/firebase';

const createMockStore = configureMockStore([reduxThunk]);

test('Should setup add expense action object with provided values', () => {
    // const expense = {
    //     description: 'rent',
    //     amount: 109500,
    //     createdAt: 1000,
    //     note: 'test note'
    // };
    const expense = expenses[0];
    const action = expenseActions.addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
        // expense: {
        //     ...expense, //spread out the expense values above to this new object
        //     id: expect.any(String) //assert that id is populated and is of type string
        // }
    });
});


test('should add expense to database and store', (done) => { //done tels Jest that this is a an async function

    const store = createMockStore({}); //create an empty store

    const expenseData = {
      description: 'Mouse',
      amount: '3000',
      note: 'test note',
      createdAt: 10000
    };

    store.dispatch(expenseActions.startAddExpense(expenseData)).then(() => {
        const actions = store.getActions(); //get an array of all the actions on the store that were dispatched
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String), //check if id is any type of string,
                ...expenseData
            }
        });
        return fireBaseDb.ref(`expenses/${actions[0].expense.id}`).once('value'); //return firebase promise
    })
    .then(fireBaseSnapshot => {
        expect(fireBaseSnapshot.val()).toEqual(expenseData);
        done(); //tell jest the test is complete, jest will wait until this function is called
    })
    .catch(err => {
        throw err;
    });
});

test('should add expense with default values to database and store', (done) => {
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const store = createMockStore({});

    store.dispatch(expenseActions.startAddExpense()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense:{
              id: expect.any(String),
              ...defaultExpenseData
          }
      });
      return fireBaseDb.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(firebaseSnapshot => {
       expect(firebaseSnapshot.val()).toEqual(defaultExpenseData);

       done();
    }).catch(err => {
        throw err;
    });
});

// test('Should setup add expense action object with default values', () => {
//     const defaultExpense = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''
//     };
//     const action = expenseActions.addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...defaultExpense,
//             id: expect.any(String)
//         }
//     })
// });

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
