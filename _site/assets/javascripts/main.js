  var openGraphUrl = "https://graph.facebook.com/v2.8/";
  var albumID = "936209046430553";
  var token = "EAADPAHttTCwBAJbXlZBZA23OFbJrzDG9nnMlGfHQqca8APtyDN6l7jTEPB7p80ammNqZBj1wJJTHjAaOKcp40aGWieB2jaoQv73POUH6mH5KrkoMOAUl6mBcXj2IECeIPYnZBbCB1budzzKCCb0hHIoWFzAAWZCQru6mIBlWIsDHMXO6fGgo6Jw8CPLxZCOVYZD";
  var limit = "30";

  var endpoint = openGraphUrl + "/" + albumID + "/photos?access_token=" + token + "&limit=" + limit + "&field=url";

  $.getJSON(endpoint, function(data) {
      for( var i = 0; i < data.data.length; i++ ){
        $('.fb-album-container').append("<div>" + data.data[i].id + "</div>");
      }
  }).fail(function() {
    alert('Could not receive data. Please contact admin.');
  });
