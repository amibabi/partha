const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Notes = new Schema({
   empid: {
      type: String
   },
   notesname: {
      type: String
   },
   
   description: {
      type: String
   }
   
}, {
   collection: 'empnotes'
})

module.exports = mongoose.model('Notes', Notes)
