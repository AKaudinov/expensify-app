const express = require('express');
const path = require('path');
const app = express(); //express application
const publicPath = path.join(__dirname, '..', 'public'); //go up a directory, and then navigate to the public folder
const port = process.env.PORT || 3000; //get the port environment variable that heroku provides or just use 3000

app.use(express.static(publicPath)); //something that runs for each request - serve up the files from publicPath

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); //run each time a get request is made to any route(and if there is no matching item in the public folder),
//and return index.html that was built by react and redux
//let react router take care of actual routing

//HEROKU provides the port via environment variable
app.listen(port, () =>{
    console.log(`Server is up on port ${port}`);
});


