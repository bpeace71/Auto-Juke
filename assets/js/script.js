var spotifyAuthKey = "e5f2da67f54748c891f1dd6828bac8c9"
var gracenoteAuthKey = "678257715-1B3FE307321B53EF62CF2A13AFB0710F"

var queryURLBase = "https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT" -H "Authorization: Bearer {your access token}"

$.ajax({
  type: "POST",
  beforeSend: function(request) {
    request.setRequestHeader("Authority", authorizationToken);
  },
  url: queryURLBase,
  data: "json=" + escape(JSON.stringify(createRequestObject)),
  processData: false,
  success: function(msg) {
    $("#results").append("The result =" + StringifyPretty(msg));
  }
});