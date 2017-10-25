var requestHelper = require("../helpers/request_helper.js")

var onSubmit = function(event) {
  event.preventDefault()
  console.log("Do on submit stuff");

  var form = event.target
  var nameInput = form["country-name"]

  var country = {
    name: nameInput.value
  }

  requestHelper.postRequest(
    'http://localhost:3000/api/bucketlist',
    function(results) {
      renderList(results)
    },
    country
  )
}

var runForm = function() {
  console.log("Run form run on form view");
  var form = document.querySelector('form#new-country-form')
  form.addEventListener('submit', onSubmit)
}

module.exports = runForm
