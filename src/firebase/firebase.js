import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeoW49xws1qqZW1nmFgOSRRBpCxwoALhQ",
    authDomain: "ak-expensify.firebaseapp.com",
    databaseURL: "https://ak-expensify.firebaseio.com",
    projectId: "ak-expensify",
    storageBucket: "ak-expensify.appspot.com",
    messagingSenderId: "600529288361",
    appId: "1:600529288361:web:55949c44d066fe6a7c7db8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); //initialize firebase to
// work with the database that you set up in the config above

const database = firebase.database(); //store database in a const variable

// database.ref().set({ //get reference to the root of db and provide the data you want to set
//    name: 'AK',
//     age: '22',
//     isSingle: true,
//     location: {
//        city: 'ShadowLand',
//         country: 'Iceland'
//     }
// }).then(() => {
//     console.log('data stored') //execute this upon the completion of data storage
// });
// //ref() mentions a document,
// // or like a table in SQL, it references a specific collection(reference) within the firebase
//
//
// //set can take any datatype, not just objects. It wipes away the original value.
// // database.ref().set('This is my data.');
// //set() method is ASYNCHRONOUS
//
//
// // database.ref().set({ //will not update the object data above, it will overwrite
// //     age: 27
// // });
//
// database.ref('age').set({ //this will update a specific child of the root object
//     age: 24
// });
//
// //update the location.city object
// database.ref('location/city').set('ShadowCity');
//
//
// database.ref('attributes').set({ //add nested attributes object to the root object
//     height: 5.9,
//     weight: 149
// }).then(() => {
//  console.log('attributes added');
// }).catch(err => {
//     console.log(`An exception has occurred when storing attributes: ${err}`)
// });



//REMOVE DATA

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('data removed')
//     })
//     .catch(err => {
//         console.log(`encountered an error during removal: ${err}`)
//     });

// database.ref('isSingle').set(null); //<<<<<<<---- other way to remove the data. The way above is preferred.
//REMOVE DATA END


//UPDATE DATA
// database.ref().update({ //only updates at the ROOT level, if you have nested objects, you have to specify everything in the nested object
//     name: 'Hunter Max',
//     age: 26,
//     job: 'Software Manager',
//     isSingle: null, //<< delete the value
//     'location/city': 'Bellevue', //update the nested object without erasing its other data
//     stressLevel: 10
// }); //update gets called with an object, so you can update multiple things in one shot
//UPDATE DATA END


//FETCH DATA

// database.ref().once('value')//grab the data once with the event type of value
//     .then(snapshot => {
//         console.log(snapshot.val()); //snapshot is the data returned
//     })
//     .catch(err =>
//         console.log(err)
//     );


// database.ref().on('value', snapshot => {
//     //subscribe to database changes and run this function callback each time data changes
//     console.log(snapshot.val());
// }, err => {
//     console.log(err); //catch the error by providing a second function
// });
//
// setTimeout(() => { //the subscription above will get the data gain after this update executes.
//     database.ref('age').set(23);
// }, 3500);
//
// //CANCEL SUBSCRIPTION
// setTimeout(() => { //the subscription above will get the data gain after this update executes.
//     database.ref().off(); //CANCEL SUBSCRIPTION - will no longer execute the subscription callback that gets the data above
// }, 7000);
//
//
// setTimeout(() => { //the subscription above will get the data gain after this update executes.
//     database.ref('age').set(24);
// }, 10500);
//
//
// //REMOVE specific subscriptions:
//
// const onValueChange = snapshot => {
//   console.log(snapshot.val());
// };
//
// database.ref().on('value', onValueChange);
//
// database.ref().off(onValueChange()); //specific subscription removed
//
// //OR
//
// const onValueChangeAlt = database.ref().on('value', snapshot => {
//     //subscribe to database changes and run this function callback each time data changes
//     console.log(snapshot.val());
// });
// database.ref().off(onValueChange()); //specific subscription removed
// //


// const onValueChange = database.ref().on('value', snapshot => {
//    const data = snapshot.val();
//    console.log(`${data.name} is a ${data.job}`)
// });


//FETCH DATA END
//TWO WAYS to grab data: FETCH data a single time, or subscribe to data changes.

///ARRAY DATA < - firebase stores object children, and not arrays. Firebase doesn't support arrays
//firebase stores objects of objects

// const firebaseNotes = {
//   notes: {
//       asdfd:{
//           title: 'first note',
//           body: 'this is my note'
//       },
//       asdf:{
//           title: 'title 2',
//           body: 'body2'
//       }
//   }
// };

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'react native'
// }); //push in a value, firebase creates a new property on the notes object


// database.ref('notes/-M0xu8mE_AniuKnj0Yza').remove();


// const expenses = [
//     {
//         title:'coffee',
//         cost: 3452
//     },
//     {
//         title:'Rent',
//         cost: 34523
//     },
//     {
//         title:'food',
//         cost: 21223
//     },
// ];
//
// expenses.forEach(expense => {
//     database.ref('expenses').push(expense);
// });


//snapshot foreach lets you iterate over each object that gets returned from the database
// const expensesSubscription = database.ref('expenses').on('value', snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(fireBaseObj => {
//         expenses.push({
//             id: fireBaseObj.key,
//             ...fireBaseObj.val()
//         })});
//
//     console.log(expenses);
// });

//child_removed < only fires when one of the expenses gets deleted
const expensesSubscriptionChildRemoved = database.ref('expenses').on('child_removed', snapshot => {
    console.log(snapshot.val());
});

//child_changed < only fires when one of the expenses gets modified
const expensesSubscriptionChildChanged = database.ref('expenses').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

//child_added < only fires when one of the expenses gets added, once for all the initial children, and then each time a new one gets added
const expensesSubscriptionChildAdded = database.ref('expenses').on('child_added', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

//database.ref('expenses').once('value')
    // .then(snapshot => {
    //     const expenses = [];
    //
    //     snapshot.forEach(fireBaseObj => {
    //         expenses.push({
    //         id: fireBaseObj.key,
    //         ...fireBaseObj.val()
    //     })});
    //
    //     console.log(expenses);
    // });

///ARRAY DATA END



console.log('a call has been made to update the database');
