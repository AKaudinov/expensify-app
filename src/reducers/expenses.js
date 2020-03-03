const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); //concat creates a copy of an array or extends a previous array with a new one and returns a new array
            return [...state, action.expense]; //spread the items from previous array, to the new array,
        // and add a new object to the array, and return it. Old array doesn't get mutated
        case 'REMOVE_EXPENSE':
            // return state.filter(expense => expense.id !== action.id);
            return state.filter(({ id }) => id !== action.id); //filter the array returns a new array based on the filter function
        //in this case, return all the expenses that do not equal the provided id.
        //original state is not mutated
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id){
                    return {
                        ...expense, //assign all the previous values to the new object
                        ...action.updates //update all the previously assigned values to the new object
                    };
                }else{
                    return expense;
                }
            }); //go through each item and modify the item that matches the provided id
        case 'GET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
