var requestHelper = require('./helpers/request_helper.js')
var renderList = require('./views/list_view.js')
var runForm = require('./views/form_view.js')

window.addEventListener('DOMContentLoaded', function(){

  runForm()
  
  console.log("Window has loaded")
  requestHelper.getRequest('http://localhost:3000/api/bucketlist', function(list){
    console.log("Got list back from API", list)
    renderList(list)
  })

})

console.log("File has completed")
