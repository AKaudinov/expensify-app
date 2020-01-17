import { createStore } from "redux";


//Action generators/Creators - functions that return action objects
                //destructure incrementBy and set a default value of 1 if object provided doesn't provide incrementBy
const incrementAction = ({ incrementBy = 1 } = {}) => { //default payload to empty object, incrementBy will be set to 1 by default since the object will be empty
  return {
    type: 'INCREMENT',
      incrementBy: incrementBy
      //See if the incrementBy is a number and if it even exists
          // typeof incrementBy === 'number' ? incrementBy : 1
  };
};

const decrementAction = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setAction = ({count}) => { //forcing the user to provide the count, which will throw an error fi not provided
  return {
      type: 'SET',
      count: count
  }
};

const resetAction = () => ({
    type: 'RESET'
});


//this is a reducer
//1. Reducers are pure functions < doesn't change or use anything outside the function scope, like not using global variables
//2. Never change state or action < STATE IS IMMUTABLE, it must return a new object that represents a new state. You CANT mutate a state

//reducer determines what to do based
// on the action it gets                //start off with a simple default state
const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //see if the action incrementBy is a number
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count //in this case, the count is required when Action is being dispatched below, we're not checking if the prop exists
            };
        default:
            return state;
    }
};


const store = createStore(countReducer);

//a function that gets called whenever the store changes
const unsubscribe = store.subscribe(() => {
   console.log(store.getState())
});

// store.getState(); //returns the current state object

//Actions - nothing more than an object that gets sent to the store


// increment the count vie the increment action
// {
//     type: 'INCREMENT' //type is required
// }

store.dispatch(incrementAction({incrementBy: 5}));

store.dispatch(incrementAction());

store.dispatch(resetAction());

store.dispatch(decrementAction({decrementBy: 10}));

store.dispatch(setAction({count: 101}));


unsubscribe(); //subscription to the store stops
