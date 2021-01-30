/// Set Up API for lastfm ///
var APIKey="4768c3baac58c09f5faba20fb58257a9";
var track="";
var findTrack=$("#search-track");
var searchButton = $("#search-button");
var artist=$("#artist");
var URLname=$("#URL");

/// Keyword search for name

///AJAX call
// $("#search-button").on("click",trackResults);
function trackNames(trackResults){
    let queryURL= "/2.0/?method=track.search&track=" + track + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
    console.log(response);
    }
    )}