const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Hobbi = new Schema({
   empid: {
      type: String
   },
   hobbiname: {
      type: String
   },
   
   description: {
      type: String
   }
   
}, {
   collection: 'emphobbies'
})

module.exports = mongoose.model('Hobbi', Hobbi)
