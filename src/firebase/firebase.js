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

database.ref().set({ //get reference to the root of db and provide the data you want to set
   name: 'AK',
    age: '22',
    isSingle: true,
    location: {
       city: 'ShadowLand',
        country: 'Iceland'
    }
}).then(() => {
    console.log('data stored') //execute this upon the completion of data storage
});
//ref() mentions a document,
// or like a table in SQL, it references a specific collection(reference) within the firebase


//set can take any datatype, not just objects. It wipes away the original value.
// database.ref().set('This is my data.');
//set() method is ASYNCHRONOUS


// database.ref().set({ //will not update the object data above, it will overwrite
//     age: 27
// });

database.ref('age').set({ //this will update a specific child of the root object
    age: 24
});

//update the location.city object
database.ref('location/city').set('ShadowCity');


database.ref('attributes').set({ //add nested attributes object to the root object
    height: 5.9,
    weight: 149
}).then(() => {
 console.log('attributes added');
}).catch(err => {
    console.log(`An exception has occurred when storing attributes: ${err}`)
});

console.log('a call has been made to update the database');
