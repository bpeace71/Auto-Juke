function findLocationWithZip() {

  var zipCode = "30080"
    var zipKey = "zItY5bAzQcwNyA8gRZbiWmh1VHPF6bGkr9IdtR7ffhZFZclIYe8NmieX5OuGkjCl"
    var latitude = "33.748995"
    var longitude = "-84.387982"
    var queryZipURL = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/" + zipKey + "/info.json/" + zipCode + "/degrees"
    
    $.ajax({
      url: queryZipURL,
      method: "GET"
    }).done(function(response) {
      console.log(response)
    });
  }

findLocationWithZip()

var zipCode = "30080"
var latitude = "33.748995"
var longitude = "-84.387982"

function searchWeather() {

    var weatherKey = "988e9c01c043c5977d3b37bfaad72e6d"
    var queryURLTwo = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + weatherKey + "/" + latitude +"," + longitude + ""
    
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).done(function(response) {
      console.log(response)
    });
  }

searchWeather()