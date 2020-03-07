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
  return (dispatch, getState) => { //redux-thunk allows to return a function that accepts a dispatch parameter, which allows to dispatch other actions
      const uid = getState().auth.uid;

      const {
          description = '',
          note = '',
          amount = 0,
          createdAt = 0
      } = expenseData; //destructure everything from the expenseData object

      const expense = {description, note, amount, createdAt};

      return fireBaseDb.ref(`users/${uid}/expenses`).push(expense).then(insertedExpenseRef => { //return the promise chain, so we can continue chaining if we want to
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

//START_REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
      const userId = getState().auth.uid;
      return fireBaseDb.ref(`users/${userId}/expenses/${id}`).remove()
          .then(() => {
              dispatch(removeExpense({id}))
          })
          .catch(err => {
              console.log(err);
          })
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

//START_EDIT_EXPENSE
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
      const userId = getState().auth.uid;
      return fireBaseDb.ref(`users/${userId}/expenses/${id}`).update({
          ...updates
      }).then(() => {
          dispatch(editExpense(id, updates))
      }).catch(err => {
          console.log(err);
      })
  }
};

//SET_EXPENSES //GET EXPENSES
export const getExpenses = (expenses) => {
    return {
        type: 'GET_EXPENSES',
        expenses: expenses
    }
};

export const startGetExpenses = () => {
    return (dispatch, getState) => {
        const userId = getState().auth.uid;
        const expenses = [];
        return fireBaseDb.ref(`users/${userId}/expenses`).once('value')
            //return the promise chain, so we can continue chaining in app.js, because it uses a then on `startGetExpenses` action
            .then(snapshot => {
                snapshot.forEach(fireBaseExpense => {
                    expenses.push({
                        id: fireBaseExpense.key,
                        ...fireBaseExpense.val()
                    })
                });
                dispatch(getExpenses(expenses))
            })
            .catch(err => console.log(err));
    };
};
