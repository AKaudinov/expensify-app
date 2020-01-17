//
//Object destructuring
//

const person = {
  name: 'Andrew',
  age: 26,
  location: {
      city:'Seattle',
      temp: 75
  }
};

        //if name is undefined when destructuring, it will default to anonymous
        //also we're assigning name from person to new local variable called firstName
const {name: firstName = 'Anonymous', age} = person; //destructure the object, break it apart and grab only the parts you need
console.log(`${firstName} is ${age}`);

                //assign temp from person.location to new temperature variable
const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`it's ${temperature} in ${city}`)
}


const book ={
  title:'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher:{
      name:'Penguin'
  }
};


const {title: bookTitle, author} = book;
const {name:publisherName = 'Self published'} = book.publisher;

console.log(`${bookTitle} written by ${author} and published by ${publisherName}`);

//
//Array destructuring
//

const address = ['1299 S Jupiter Street', 'Seattle', 'Washington', '19147'];

        //matches by position in order within the array
        //Gives a default value of New York for state if that item in the array above is non existent
const [street, city, state = 'New York', zip]  = address; //for array destructuring, we use square brackets instead of curly braces

// const [street, city, state] = address; destructure just the first three items in the array
// const [, , state] = address;  destructure only the third item from the array, and skip the first two

//There's no renaming, since arrays aren't objects and don't contain naming

console.log(`You're in ${city} ${state}.`);


//Another EX:

const coffeeMenu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];


const [item, ,cost] = coffeeMenu; //grab/destructure only the first and third item from the array

console.log(`A ${item} item costs ${cost}`);
