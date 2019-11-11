const express = require('express');
const app = express();
const path = require('path');

//telling express to serve up a set of static files that are created when our dist dir is created when the app is built
app.use(express.static(__dirname + '/dist/meme_generator'));

//start the app by listening to heroku port
app.listen(process.env.PORT || 8080);

//letting angular handle our routing instead of the server so that /
//when we type some subroute of our app we make sure that our index.html file /
// gets served for any other route that gets typed in the address bar
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/meme_generator/index.html'));
});

console.log('Console listening.');