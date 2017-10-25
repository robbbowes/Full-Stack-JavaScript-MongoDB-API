var requestHelper = {}

requestHelper.getRequest = function(url, callback) {
  console.log("Inside request helper, get request")
  var jsonData = '[{"name": "Fake country"}, {"name": "Fake country 2"}]'
  var arrayOfCountryObjects = JSON.parse(jsonData)
  callback(arrayOfCountryObjects)
}

module.exports = requestHelper
