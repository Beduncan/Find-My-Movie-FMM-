$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB6Ff461GnlfJfCqGsLEseAidIfh3jX8No",
        authDomain: "find-my-movie-cfebd.firebaseapp.com",
        databaseURL: "https://find-my-movie-cfebd.firebaseio.com",
        projectId: "find-my-movie-cfebd",
        storageBucket: "find-my-movie-cfebd.appspot.com",
        messagingSenderId: "447183757316"
    };
    firebase.initializeApp(config);
var database = firebase.database();
//on click functions to save email
    $("#emailbutton").on("click", function() {
        event.preventDefault();
        var email = $("#email-input").val().trim();
        console.log(email);
        database.ref().push({
            email: email,
            });
    });


$(document).ready(function() {  

    $("#Detailbutton").on("click", function(event) {

        event.preventDefault();


     var movie = $("#movie-input").val();
    console.log(movie);

    
 
var apikey = "xwnuct9pwa826d3qjnruj2h2";
var baseUrl = "http://data.tmsapi.com/v1.1";
var showtimesUrl = baseUrl + '/movies/showings?api_key=' + apikey;
var zipCode = "85234";
var d = new Date();

var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

   
        // send off the query
        $.ajax({
            url: showtimesUrl,
                method: "GET"
            }).done();
           
        

    });
});
});


// youtube api
$(document).ready(function(){
  $('#movie').hide();
  
 
  $('#Trailerbutton').on("click", function() {
    var trail = $('#movie-input').val();
    var replaced = trail.replace(' ', '+');
    var query = "https://www.youtube.com/embed?listType=search&list=" + trail + "trailer"
    $('#movie').show();
    $('#movie').attr("src", query);

    console.log(query);
  });

});