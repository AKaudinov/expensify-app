import moment from "moment";

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
                                            //see if the start date filter is the same or starts before the expense has been created
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
                                            //see if the end date filter is the same or starts after the expense has been created
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //startDateMatch and endDateMatch have to be in range of the created expense
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
