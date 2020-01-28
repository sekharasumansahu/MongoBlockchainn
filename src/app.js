const express = require('express');
const bodyparser =require('body-parser');

const app = express();
global.router = express.Router()
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

require('dotenv').config();

app.listen(process.env.SERVER_PORT, (err)=>{
  if (err) console.log('Error occured while running the server...!!!');
  console.log('Server running on '+process.env.SERVER_PORT);
  
})

module.exports = app;