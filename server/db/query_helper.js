var MongoClient = require('mongodb').MongoClient

var testJsonStuff = {hi: "We are the best!!!"}

var queryHelper = {}

queryHelper.url = 'mongodb://localhost:27017/bucket_list'

queryHelper.all = function(callback){
  console.log('In the query helper file, all method')
  callback(testJsonStuff)
}

queryHelper.save = function(callback){
  console.log('In the query helper file, save method')
  callback(testJsonStuff)
}

module.exports = queryHelper
