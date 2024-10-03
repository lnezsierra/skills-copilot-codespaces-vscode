// Create web server
// Create a server that listens on port 3000. The server should respond to a request to the endpoint /comments with an array of comments.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  {
    name: 'John',
    comment: 'Hello, I am John'
  },
  {
    name: 'Jane',
    comment: 'Hello, I am Jane'
  }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
