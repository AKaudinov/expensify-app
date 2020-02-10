import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import React from 'react';
import {shallow} from 'enzyme';
import getTotalExpenses from "../../selectors/expenses-total";


test('Should render ExpensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary totalExpenses={getTotalExpenses(expenses)}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary totalExpenses={getTotalExpenses([])}/>);
    expect(wrapper).toMatchSnapshot();
});
