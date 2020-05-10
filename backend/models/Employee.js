const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   empfname: {
      type: String
   },
   emplname: {
      type: String
   },
   empcode: {
      type: Number
   },
   empdept: {
      type: String
   },
    empdesignation: {
      type: String
   },
   empemail: {
      type: String
   },
   empcontact: {
      type: Number
   },
  empaddress: {
      type: String
   },
   empcity: {
      type: String
   },
   empcountry: {
      type: String
   }
}, {
   collection: 'employeedetail'
})

module.exports = mongoose.model('Employee', Employee)
