import { createStore, combineReducers } from "redux";
                        //combineReducers lets you combine multiple reducers into a "one" reducer
import uuid from 'uuid';

// //ADD_EXPENSE
// const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(), //automatically set the id via the uuid library
//         description: description,
//         note: note,
//         amount: amount,
//         createdAt: createdAt
//     }
// });
// //REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => { //default to empty object if the passed in object is undefined
//   return {
//       type: 'REMOVE_EXPENSE',
//       id: id
//   }
// };
// //EDIT_EXPENSE
// const editExpense =(id, updates) => {
//   return {
//       type: 'EDIT_EXPENSE',
//       id: id,
//       updates: updates
//   }
// };
//
// //SET_TEXT_FILTER
// const setTextFilter = (text = '') => {
//     return {
//         type: 'SET_TEXT_FILTER',
//         text: text
//     }
// };
//
// //SORT_BY_DATE
// const sortByDate = () => ({
//    type: 'SORT_BY_DATE'
// });
// //SORT_BY_AMOUNT
// const sortByAmount =() => {
//   return {
//       type: 'SORT_BY_AMOUNT'
//   }
// };
// //SET_START_DATE
// const setStartDate = (startDate) => {
//     return {
//         type: 'SET_START_DATE',
//         date: startDate
//     }
// };
// //SET_END_DATE
// const setEndDate = (endDate) => {
//   return {
//       type: 'SET_END_DATE',
//       date: endDate
//   }
// };
//
// //Expenses Reducer
//
// const expensesReducerDefaultState = [];
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };
//
// const expensesReducer = (state = expensesReducerDefaultState, action) =>{
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             //return state.concat(action.expense); //concat creates a copy of an array or extends a previous array with a new one and returns a new array
//             return [...state, action.expense]; //spread the items from previous array, to the new array,
//                             // and add a new object to the array, and return it. Old array doesn't get mutated
//         case 'REMOVE_EXPENSE':
//            // return state.filter(expense => expense.id !== action.id);
//            return state.filter(({ id }) => id !== action.id); //filter the array returns a new array based on the filter function
//             //in this case, return all the expenses that do not equal the provided id.
//             //original state is not mutated
//         case 'EDIT_EXPENSE':
//             return state.map(expense => {
//                if(expense.id === action.id){
//                    return {
//                        ...expense, //assign all the previous values to the new object
//                        ...action.updates //update all the previously assigned values to the new object
//                    };
//                }else{
//                    return expense;
//                }
//             }); //go through each item and modify the item that matches the provided id
//         default:
//             return state;
//     }
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) =>{
//   switch (action.type) {
//       case 'SET_TEXT_FILTER':
//           return  {
//               ...state, //grab all the previous properties on the object and add them to this new object
//               text: action.text //overwrite the previous assigned properties just above
//           };
//       case 'SORT_BY_DATE':
//           return {
//             ...state,
//             sortBy: 'date'
//           };
//       case 'SORT_BY_AMOUNT':
//           return {
//             ...state,
//             sortBy: 'amount'
//           };
//       case 'SET_START_DATE':
//           return {
//               ...state,
//               startDate: action.date
//           };
//       case 'SET_END_DATE':
//           return {
//               ...state,
//               endDate: action.date
//           };
//       default:
//           return state;
//   }
// };



// //Store creation
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer, //root state name and the value that is supposed to manage that portion of the state
//         filters: filtersReducer
//     })
// );


//timestamps = (milliseconds)
//positive or negative integer values
//0 = january 1st 1970(unix epoch) starting point for all timestamps

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//   return expenses.filter(expense => {
//      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//      const textMatch = expense.description.toLowerCase().includes(text);
//      return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//       //-1: comes first
//       //1: b comes first
//       if(sortBy === 'date'){
//           return a.createdAt < b.createdAt ? 1 : -1; //if a is less than b, b comes first, otherwise a comes first
//       }else if(sortBy === 'amount'){
//           return a.amount < b.amount ? 1 : -1; //if a is less than b, b comes first, otherwise a comes first
//       }
//   });
// };

// store.subscribe(() => {
//     // console.log(store.getState()); //subscribe to the store
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });
//
// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000})); //dispatch returns the object it dispatched
// const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -1000}));
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//
// store.dispatch(setTextFilter('rent'));
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));
//
// const demoState = {
//   expenses: [{
//       id: 'asdflkj',
//       description: 'January Rent',
//       note: 'final payment for that address',
//       amount: 54500,
//       createdAt: 0
//   }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };



// const user ={
//   name: 'Jen',
//   age: 24
// };
//
//                                             //keep all the old values,       add new ones
//                                     //and assign those values
//                                     //to the new object
// const newObject = Object.assign({}, user, {height: 45, location: 'Mountains'});
// //OR
// const newObj = {
//     ...user, //keep all the previous values
//     height: 45, //add new ones
//     location: 'Mountains',
//     age: 27 //override any previous values
// };
//



