/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
export const {
  check,
  validationResult,
  body
} = require('express-validator');


const MongoClient = require('mongodb').MongoClient

export class DbConn {
  static async getConn() {
    if (this.db) {
      return this.db;
    } else {
      this.client = await new MongoClient(this.url, this.options);
      this.conn = await this.client.connect();
      this.db = await conn.db(process.env.DBNAME);
      return this.db;
    }
  }
}

DbConn.client = null;
DbConn.db = null;
DbConn.conn = null;
DbConn.url = 'mongodb://' + process.env.DBHOST + ':27017';
DbConn.options = {
  useNewUrlParser: true
}


// export class DbConn {
//   constructor() {
//     DbConn.MongoClient = null;
//     DbConn.url = null;
//     DbConn.client = null;
//     DbConn.clientConn = null;
//     DbConn.db = null;
//   }
//   static getInstance() {
//     if (DbConn.db == null) {
//       DbConn.db = new DbConn();
//     }
//     return DbConn.db;
//   }

//   static __createClient(){
//     if(DbConn.clientConn == null) {
//       DbConn.MongoClient = require('mongodb').MongoClient;
//       DbConn.url = 'mongodb://' + process.env.DBHOST + ':27017';
//       DbConn.client = new DbConn.MongoClient(DbConn.url, { useUnifiedTopology: true });
//       DbConn.clientConn = client.connect();
//     }
//     return DbConn.clientConn;
//   }

//   async executeQuery(){

//   }
// }
// //Database configureations 
// const MongoClient = require('mongodb').MongoClient;
// // Connection URL
// const url = 'mongodb://' + process.env.DBHOST + ':27017';

// // export const getDbConn = async () => {
// //   try {
// //     // Create a new MongoClient
// //     const client = new MongoClient(url, {
// //       useUnifiedTopology: true
// //     });
// //     const clientConn = await client.connect();
// //     console.log("DB connected successfully");
// //     let db = clientConn.db(process.env.DBNAME);
// //     let conn = db.collection('company');
// //     return conn;
// //   } catch (err) {
// //     throw err;
// //   }

// }
