



var zipCode = document.getElementById("inputbox").value;
//var latitude = "#"
//var longitude = "#"

$("button").on("click", function findLocationWithZip() {
    event.preventDefault();   
    var zipCode = document.getElementById("inputbox").value;
    var zipKey = "zItY5bAzQcwNyA8gRZbiWmh1VHPF6bGkr9IdtR7ffhZFZclIYe8NmieX5OuGkjCl";
    var weatherKey = "23a22b2c326490bd56054c01f0eb55d2";

    var queryZipURL = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/" + zipKey + "/info.json/" + zipCode + "/degrees";

    $.ajax({
      url: queryZipURL,
      method: "GET"
    }).done(function(zipResponse) {
      console.log(zipResponse);
      console.log(zipResponse.city);
      console.log(zipResponse.lat);
      console.log(zipResponse.lng);
      latitude = (zipResponse.lat);
      longitude = (zipResponse.lng);
//Dark Sky converts latitude and Longitude and spits out temperature.
    var queryURLTwo = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + weatherKey + "/" + latitude +"," + longitude + "";
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).done(function(darkSkyResponse) {
      console.log(darkSkyResponse)
      console.log(darkSkyResponse.currently.temperature);
      currentTemp = (darkSkyResponse.currently.temperature)
      });
    });
  });