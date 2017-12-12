$( document ).ready(function() {
//debugger;
  $("#inputbox").keyup(function(event) {
     if (event.keyCode === 13) {
         $("#button").click();
     }
  });
  var zipCode = $("#inputBox").val();
  //var latitude = "#"
  //var longitude = "#"
  $("button").on("click", function findLocationWithZip() {
     event.preventDefault();  
     var zipCode = $("#inputBox").val();
     console.log(zipCode)
     var zipKey = "XlalQH6kVoPgkQjAkDWKj3JTCESokMN134oprDwrEMItEUtlRWi8WHxHiqS8COyz";
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
  // Your Access Key ID, as taken from the Your Account page
  var access_key_id = "AKIAIYUBWASGMNBR5AAQ";
  // Your Secret Key corresponding to the above ID, as taken from the Your Account page
  var secret_key = "WXtipMIlr307lYW0twTFbtV7xgto+NPOvlUx/pWG";
  // The region you are interested in
  var endpoint = "webservices.amazon.com";
  var temperature = currentTemp;
  var keyWord = "Mens Winter Clothing"
  //var summer = 
  //var spring =
  //var winter = 
  //var fallout =
  //var keyWord = $("#search").val()
  var setKeyWord = function() {
    if (temperature <= 40 && temperature > 40) {
      var keyWord = "Mens Winter Clothing";
    } else if( temperature <= 60 && temperature > 41 ) {
      var keyWord = "Mens Fall Clothing";
    } else if( temperature <= 80 && temperature > 61 ) {
      var keyWord = "Mens Spring Clothing"
    } else if( temperature <= 110 && temperature > 81 ) {
      var keyWord = "Mens Summer Clothing"
    } else if( temperature <= 1000 && temperature > 111)  {
      var keyWord = "Radiation Suit"
    } else( temperature < 1 ) 
      var keyWord = "Adult Snow Suit"
    
    return keyWord
  }
 
  setKeyWord(keyWord);
  var uri = "/onca/xml";
  var now = new Date();
  var params = {
      "Service": "AWSECommerceService",
      "Operation": "ItemSearch",
      "AWSAccessKeyId": "AKIAIYUBWASGMNBR5AAQ",
      "AssociateTag": "mitchvassar",
      "SearchIndex": "All",
      "Keywords": keyWord,
      "ResponseGroup": "Images,ItemAttributes,Offers",
      "Timestamp": now.toISOString()
  };
  // TODO: Sort the parameters by key
  var paramKeys = Object.keys(params);
  paramKeys = paramKeys.sort();
  var pairs = [];
  paramKeys.forEach( function ( key ) {
    pairs.push( encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) );
  });
  // TODO: Generate the canonical query
  var canonical_query_string = pairs.join( "&" );
  // Generate the string to be signed
  var string_to_sign = "GET\n" + endpoint + "\n" + uri + "\n" + canonical_query_string;
  // Generate the signature required by the Product Advertising API
  var hmac = forge.hmac.create();
  hmac.start( "sha256", secret_key );
  hmac.update( string_to_sign );
  var signature = hmac.digest().bytes();
  signature = forge.util.encode64(signature);
  // Generate the signed URL
  var request_url = "https://cors-anywhere.herokuapp.com/" + 'http://' + endpoint + uri + '?' + canonical_query_string + '&Signature=' + encodeURIComponent(signature);
  console.log( request_url );
  $.ajax({
      url: request_url,
      dataType: 'xml',
      success: function(response) {
          var json = $.xml2json(response);
          var results = json["#document"].ItemSearchResponse.Items.Item;
          console.log(results);
          for (var i = 0; i < 4; i++) {
            var amazonImg = results[i].ImageSets.ImageSet;
            if (Array.isArray(amazonImg)) {
              $("#amazonInput").prepend("<img " + "src=" + results[i].ImageSets.ImageSet["0"].MediumImage.URL + " >");
            } else { 
              $("#amazonInput").prepend("<img " + "src=" + results[i].ImageSets.ImageSet.MediumImage.URL + " >");
            }
         }
      }
  });
         });
     });
   });
});