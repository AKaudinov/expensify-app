import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListItem} from "../../components/ExpenseListItem"; //import the non-connected component version
import expenses from "../fixtures/expenses";

test('Should render ExpenseListItem', () => {
   const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
   expect(wrapper).toMatchSnapshot();
});
