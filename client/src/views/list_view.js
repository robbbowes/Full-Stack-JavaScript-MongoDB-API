var renderList = function(arrayOfCountryObjects) {
  console.log("Inside render list", arrayOfCountryObjects)

  var bucketListDiv = document.querySelector('div#bucket-list')
  console.log(bucketListDiv)

  var ulElt = document.createElement('ul')

  for (var countryObject of arrayOfCountryObjects) {
    var liElt = document.createElement('li')
    liElt.innerText = countryObject.name
    ulElt.appendChild(liElt)
  }

  bucketListDiv.appendChild(ulElt)

}

module.exports = renderList
