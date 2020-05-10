const express = require('express');
const app = express();
const hobbiRoute = express.Router();



let Hobbi = require('../models/Hobbi');



hobbiRoute.route('/createHobbi').post((req, res, next) => {
	console.log("test"+req.body);
 Hobbi.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
	
      res.json(data);
	  //console.log(res.json(data));
    }
  })
});


// Get Allhobbis
hobbiRoute.route('/').get((req, res) => {
 Hobbi.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


hobbiRoute.route('/delete/:id').delete((req, res, next) => {
 Hobbi.findOneAndRemove(req.params.id, (error, data) => {
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

hobbiRoute.route('/update/:id').put((req, res, next) => {
 Hobbi.findByIdAndUpdate(req.params.id, {
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


// Get singlehobbi
hobbiRoute.route('/read/:id').get((req, res) => {
 Hobbi.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




module.exports =hobbiRoute;