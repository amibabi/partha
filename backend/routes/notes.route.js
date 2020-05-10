const express = require('express');
const app = express();
const notesRoute = express.Router();



let Notes = require('../models/Notes');



notesRoute.route('/createnotes').post((req, res, next) => {
	console.log("test"+req.body);
 Notes.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
	
      res.json(data);
	  //console.log(res.json(data));
    }
  })
});


// Get Allnotess
notesRoute.route('/').get((req, res) => {
 Notes.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


notesRoute.route('/delete/:id').delete((req, res, next) => {
 Notes.findOneAndRemove(req.params.id, (error, data) => {
    console.log("kkkkkkk");
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

notesRoute.route('/update/:id').put((req, res, next) => {
 Notes.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})


// Get singlenotes
notesRoute.route('/read/:id').get((req, res) => {
 Notes.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




module.exports =notesRoute;