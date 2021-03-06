//snapshot testing - track changes over time

// react-test-renderer - render components inside JS code and assert the component
import ReactShallowRenderer from 'react-test-renderer/shallow';

//shallow rendering < no interaction, and also with no child components
//full DOM rendereing < allows interaction and renders all child components

import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme'
import expenses from "../fixtures/expenses";
import {AddExpense} from "../../components/AddExpense"; //import shallow renderer from enzyme

test('Should render Header correctly', () => {
   // const renderer = new ReactShallowRenderer();
   // renderer.render(<Header/>); //renderer renders the jsx you specify, in this case header jsx
   // expect(renderer.getRenderOutput()).toMatchSnapshot(); //first time the test runs, it will pass, and jest will create
   //  //a snapshot of jsx, and 2nd time it will compare the rendering to the created snapshot


   //Enzyme testing
   const wrapper = shallow(<Header logout={() => {}}/>);
   expect(wrapper).toMatchSnapshot(); //make enzyme work with the snapshots via enzyme-to-json library
});

//should call startLogout on button click
test('Should call logout on button click', () => {
   const logout = jest.fn();
   const wrapper = shallow(<Header logout={logout}/>);
   wrapper.find('button').simulate('click');

   expect(logout).toHaveBeenCalled();
});


//enzyme released by airbnb for react js and testing it
