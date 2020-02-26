import uuid from "uuid";
import fireBaseDb from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
    // expense: {
    //     // id: uuid(), //automatically set the id via the uuid library
    //     description: description,
    //     note: note,
    //     amount: amount,
    //     createdAt: createdAt
    // }
});


export const startAddExpense = (expenseData = {}) => {
  return dispatch => { //redux-thunk allows to return a function that accepts a dispatch parameter, which allows to dispatch other actions
      const {
          description = '',
          note = '',
          amount = 0,
          createdAt = 0
      } = expenseData; //destructure everything from the expenseData object

      const expense = {description, note, amount, createdAt};

      return fireBaseDb.ref('expenses').push(expense).then(insertedExpenseRef => { //return the promise chain, so we can continue chaining if we want to
          dispatch(addExpense({
              id: insertedExpenseRef.key,
              ...expense
          }))
      }).catch(err => console.log(err));
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => { //default to empty object if the passed in object is undefined
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

//EDIT_EXPENSE
export const editExpense =(id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
};
