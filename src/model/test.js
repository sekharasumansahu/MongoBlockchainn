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

let test = new Schema({
  name : {
    type : String,
    required : true
  }
});

test.save = (err, res)=>{ 
  if(err) console.log(err);
  console.log(res);
}
module.exports = mongoose.model('test', test);