import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should render ExpenseForm correctly', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
   expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm/>);
   expect(wrapper).toMatchSnapshot(); //make sure the snapshot doesn't have the error the first time
   wrapper.find('form').simulate('submit', {
      preventDefault: () => {} //pass in the event object to the function
   }); //simulate form submission, found via enzyme 'find()' method

   //fetch the state for the component and check its data
   expect(wrapper.state('error').length).toBeGreaterThan(0); //error field length has to be more than 0

   expect(wrapper).toMatchSnapshot(); //test to make sure the new snapshot does actually have an error
});


test('should set description on input change', () => {
   const value = 'new description';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(0).simulate('change', {  //first input is the description field
      target: {
         value: value
      }
   });

   expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea change', () => {
   const textareaValue = 'new text area value';
   const wrapper = shallow(<ExpenseForm/>);

   wrapper.find('textarea').simulate('change', {
      target:{
         value: textareaValue
      }
   });

   expect(wrapper.state('note')).toBe(textareaValue);
});


test('should set amount if valid input', () =>{
   //23.50
   const amount = '23.50';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(1).simulate('change', {
      target:{
         value: amount
      }
   });

   expect(wrapper.state('amount')).toBe(amount);
});

test('should not set amount if invalid input', () =>{
   //12.122
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(1).simulate('change', {
      target:{
         value: '12.122'
      }
   });
   expect(wrapper.state('amount')).toBe('');
});


//Use test spies to mock the prop functions that can be called within the component
test('should call onSubmit prop for valid from submission',() => {
   const onSubmitSpy = jest.fn(); //jest returns the spy
   const wrapper = shallow(<ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy}/>);

   wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
   });

   expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[2].description,
      amount: expenses[2].amount,
      note: expenses[2].note,
      createdAt: expenses[2].createdAt
   }); //check the last time the spy was called with specific information

   // onSubmitSpy('Andrew');
   // // expect(onSubmitSpy).toHaveBeenCalled(); //throws the error if the spy is never called
   // expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philadelphia');
});


test('should set new date on date change', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
   //find by component, and kick off the single date picker component on Date change method
   expect(wrapper.state('createdAt')).toEqual(now);
});


test('should set calendar focus on change', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper.state('calendarFocused')).toBe(false); //make sure the the state starts out with a falsy value
   wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true}); //this will call the onFocusChange on the main component that renders SingleDatePicker
   expect(wrapper.state('calendarFocused')).toBe(true); //make sure the calendar focus of the state is now a true value
});

