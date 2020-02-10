import totalExpenses from '../../selectors/expenses-total';
import expenses from "../fixtures/expenses";


test('Should return 0 if no expenses', () => {
    const total = totalExpenses([]);
    expect(total).toBe(0);
});


test('should add up a single expense', () => {
    const total = totalExpenses([expenses[0]]);
    expect(total).toBe(195);
});


test('should correctly add up multiple expenses', () => {
    const total = totalExpenses(expenses);
    expect(total).toBe(193929)
});
