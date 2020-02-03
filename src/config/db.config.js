/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//Input validation
export const {
  check,
  validationResult, body
} = require('express-validator');


//Database configureations 
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://' + process.env.DBHOST + ':27017';

export const getDbConn = async () => {
  try {
    // Create a new MongoClient
    const client = new MongoClient(url,{ useUnifiedTopology: true });
    const clientConn = await client.connect();
    console.log("DB connected successfully");
    let db = clientConn.db(process.env.DBNAME);
    let conn = db.collection('company');
    return conn;
  } catch (err) {
    throw err;
  }

}

