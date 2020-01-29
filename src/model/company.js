/**
 * company model
 * This file to define database schema for company collections.
 * @package src/model
 * @subpackage model/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//Importing mongoose package
import {
  mongoose,
  Schema
} from '../config/db';

//Defining User schema
let User = new Schema({
  user: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      maxlength: 12
    },
    userId: {
      type: String,
      required: true
    },
    passsword: {
      type: String,
      required: true
    }
  }
});

//Defining Company schema
let Company = new Schema({
  company: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    country: {
      type: String,
      enum: ['India', 'UK', 'USA'],
      required: true
    },
  }
});

//Defining Registered company schema
let CompanyDetails = new Schema({
  user: [User],
  company : [Company],
  product: [],
  distributor: [],
  created_on : {
    type : Date,
    default : Date.now()
  },
  updated_on : {
    type : Date,
    default : Date.now()
  }
});

module.exports = mongoose.model('Company', CompanyDetails);