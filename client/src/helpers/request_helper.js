var requestHelper = {}

requestHelper.getRequest = function(url, callback) {
  console.log("Inside request helper, get request")
  // var jsonData = '[{"name": "Fake country"}, {"name": "Fake country 2"}]'

  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.addEventListener('load', function(){
    console.log("Request has loaded")
    var jsonString = xhr.responseText
    var arrayOfCountryObjects = JSON.parse(jsonString)
    callback(arrayOfCountryObjects)
  })

  xhr.send()
}

module.exports = requestHelper
