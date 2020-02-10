const getExpensesTotal = (expenses) => {
    const allAmounts = expenses.map(expense => {
       return expense.amount;
    });
    return allAmounts.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }, 0); //start with the inital value of 0, if there are no expenses, reduce will just return 0 here
};

export default getExpensesTotal;
