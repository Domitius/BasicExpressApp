const express = require('express');
// Start the server
const app = express();
const port = 3333;
const path = require('path');

// This is the default page
app.get('/', function(req, res) {
  // This works without the path module but as the routes become more complex it is good practice to use path.
  res.sendFile(path.join(__dirname + "/index.html"), function(error) {
    if (error) {
      console.log('There was an error retreving about.html');
    } else {
      console.log('Was able to send index.html');
    }
  });
});

// When the user typer /about
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + "/about.html"), function(error) {
    if (error) {
      console.log('There was an error retreving about.html');
    } else {
      console.log('Was able to send about.html');
    }
  });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
