const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        //-1: comes first
        //1: b comes first
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1; //if a is less than b, b comes first, otherwise a comes first
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1; //if a is less than b, b comes first, otherwise a comes first
        }
    });
};

export default getVisibleExpenses;
