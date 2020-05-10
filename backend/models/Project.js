const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Project = new Schema({
   empid: {
      type: String
   },
   projectid: {
      type: Number
   },
   projectname: {
      type: String
   },
   skills: {
      type: String
   },
   description: {
      type: String
   }
   
}, {
   collection: 'empprojects'
})

module.exports = mongoose.model('Project', Project)
