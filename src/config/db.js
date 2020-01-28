const mongoose = require("mongoose");
mongoose.connect('mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT + '/' + process.env.DBNAME);
// create instance of Schema
export const mongoSchema = mongoose.Schema;