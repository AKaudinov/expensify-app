import React from 'react';
import {shallow} from 'enzyme';
import {Login} from "../../components/Login";
import {Header} from "../../components/Header";

test('should render login component', () => {
   const wrapper = shallow(<Login/>);
   expect(wrapper).toMatchSnapshot();
});


test('Should call login on submit click', () => {
   const login = jest.fn();
   const wrapper = shallow(<Login login={login}/>);

   wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
   });
   expect(login).toHaveBeenCalled();

});

// test('Should call logout on button click', () => {
//    const logout = jest.fn();
//    const wrapper = shallow(<Header logout={logout}/>);
//    wrapper.find('button').simulate('click');
//
//    expect(logout).toHaveBeenCalled();
// });
