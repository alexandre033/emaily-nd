const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(req, {hi : 'there'});
});

const PORT = process.env.PORT || 3000;

app.listen(3000, ()=>{
  console.log('App started at :3000');
});
