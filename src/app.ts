import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send([{}]);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});