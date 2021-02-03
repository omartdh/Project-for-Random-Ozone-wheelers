/// Set Up API for lastfm ///
var APIKey="4768c3baac58c09f5faba20fb58257a9";
var track=$("#trackName");
var findTrack=$("#search-track");
var searchButton = $("#search-button");
var artist=$("#artist");
var URLname=$("#URL");

/// Keyword search for name

///AJAX call
// $("#search-button").on("click",trackResults);
function trackNames(track){
    let queryURL= "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + track + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
    console.log(response)
        
    }
    //load name of track
    //        lastfm.track.getInfo({track: trackName, limit: 10}, {success: function(data){
    // //render data of track name
    //            $('name').html(
    //                $('#lastfmTemplateTrackInfo').render(data.name)
    //            );
    // //load the artist's name
    //            lastfm.song.getArtist({artist: trackArtist}, {success: function(data){
    //                // render the tracks using 'lastfmTemplateTracks' template
    //                $('#').html(
    //                    $('#lastfmTemplateTracks').render(data.artist.name)
    //                );
    //            }})  
