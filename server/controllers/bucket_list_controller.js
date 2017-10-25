var queryHelper = require('../db/query_helper.js')
var express = require('express')
var bucketListRouter = express.Router()

bucketListRouter.get('/', function(req, res){
  console.log("Get / called")
  queryHelper.all(function(stuff){
    console.log('In the query helper callback, on bucket list router')
    res.json(stuff)
  })
})

module.exports = bucketListRouter
