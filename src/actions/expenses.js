import uuid from "uuid";

export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(), //automatically set the id via the uuid library
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

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
