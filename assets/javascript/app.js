var config = {
        apiKey: "AIzaSyB6Ff461GnlfJfCqGsLEseAidIfh3jX8No",
        authDomain: "find-my-movie-cfebd.firebaseapp.com",
        databaseURL: "https://find-my-movie-cfebd.firebaseio.com",
        projectId: "find-my-movie-cfebd",
        storageBucket: "find-my-movie-cfebd.appspot.com",
        messagingSenderId: "447183757316"
        };
        firebase.initializeApp(config);  
        //var for database
        var database = firebase.database();
//global values
var email = "";
    //on click functions to save email
    $("#emailbutton").on("click", function() {
        event.preventDefault();
        email = $("#email-input").val().trim();
        console.log(email);
        database.ref().push({
            email: email,
        });
    });
    //firebase watcher
    database.ref().on("child_added", function(snapshot){
        console.log(snapshot.val().email);
    });
    
$("#movie-input").on("click", function(event) {
   
 event.preventDefault();
 
var apikey = "xwnuct9pwa826d3qjnruj2h2";
var baseUrl = "http://data.tmsapi.com/v1.1";
var showtimesUrl = baseUrl + '/movies/showings';
var zipCode = "85234";
var d = new Date();

var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

    $(document).ready(function() {
        // send off the query
        $.ajax({
            url: showtimesUrl,
                data: { startDate: today,
                        zip: zipCode,
                        jsonp: "dataHandler",
                        api_key: apikey
                    },          
                dataType: "jsonp",
            });

         });
});

// callback to handle the results
function dataHandler(data) {
  
    $("#AdamsApi").append('<p>Found ' + data.length + ' movies showing within 5 miles of ' + zipCode+':</p>');

    var movies = data.hits;

    $.each(data, function(index, movie) {

        var movieData = '<div class="tile"><img src="http://developer.tmsimg.com/' + movie.preferredImage.uri + '?api_key='+apikey+'"><br/>';

        movieData += movie.title;

        if (movie.ratings) { movieData += ' (' + movie.ratings[0].code + ') </div>' };

    $(document.body).append(movieData);

  });
}








// gets yt trailer
function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $('#movie-input').on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#movie-input").val()).replace(/%20/g, "+"),
            maxResults: 1,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#DonnysApi").html("");
          $.each(results.items, function(index, item) {
            $.get(".video w100", function(data) {
                $("#DonnysApi").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          // resetVideoHeight();
       });
    });
    
    // $(window).on("resize", resetVideoHeight);
});

// function resetVideoHeight() {
//     $(".video").css("height", $("#DonnysApi").width() * 9/16);
// }

function init() {
    gapi.client.setApiKey("AIzaSyCHpWLyIoJ2j6Z26eeFo27bENAZq8rj6TA");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}


// AIzaSyCasvqhF4Adlvc5LlOY9S31JzUKZppoggo