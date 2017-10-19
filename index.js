const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(req, {hi : 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(5000, ()=>{
  console.log('App started at :5000');
});
