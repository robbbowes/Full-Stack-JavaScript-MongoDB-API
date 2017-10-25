var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var bucketListRouter = require('./controllers/bucket_list_controller.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../client/build'))
app.use('/api/bucketlist', bucketListRouter)

app.listen(3000, function(){
  console.log(Date.now(), 'server started on port ' + this.address().port)
})
