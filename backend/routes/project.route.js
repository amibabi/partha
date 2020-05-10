const express = require('express');
const app = express();
const projectRoute = express.Router();



let Project = require('../models/Project');



projectRoute.route('/createProject').post((req, res, next) => {
	console.log("test"+req.body);
  Project.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
	
      res.json(data);
	  //console.log(res.json(data));
    }
  })
});


// Get All Projects
projectRoute.route('/').get((req, res) => {
  Project.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


projectRoute.route('/delete/:id').delete((req, res, next) => {
  Project.findOneAndRemove(req.params.id, (error, data) => {
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

projectRoute.route('/update/:id').put((req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, {
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


// Get single project
projectRoute.route('/read/:id').get((req, res) => {
  Project.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




module.exports = projectRoute;