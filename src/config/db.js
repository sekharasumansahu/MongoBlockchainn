/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//Import the mongoose package 
export const mongoose = require("mongoose");
export const Schema = mongoose.Schema;
export const { check, body, validationResult} = require('express-validator');
//Method to establish db connection
export const getDbConn = async () => {
  try {
    let url = 'mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/' + process.env.DBNAME;
    //Configure of Database connection
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected successfully');
    
    //return db;
  } catch (err) {
    console.log(err + 'Error while connecting to Database...');
  }
}
