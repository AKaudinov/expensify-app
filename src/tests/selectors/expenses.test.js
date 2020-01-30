import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from "../fixtures/expenses";
// const expenses = [
//     {
//         id:'1',
//         description: 'test1',
//         note: '',
//         amount: 195,
//         createdAt: 0
//     },
//     {
//         id:'2',
//         description: 'test2',
//         note: '',
//         amount: 234,
//         createdAt: moment(0).subtract(4, 'days').valueOf()
//     },
//     {
//         id:'2',
//         description: 'Rent',
//         note: '',
//         amount: 193500,
//         createdAt: moment(0).add(4, 'days').valueOf() //valueOf gives regular timestamp back
//     },
// ];


test('Should filter by text value', () => {
    const filters = {
      text: 'Rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});


test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});


test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]); //sort by date descending
});


test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]); //sort by amount descending
});
