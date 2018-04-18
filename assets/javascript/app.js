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
    var zipCode = $("#zipcode-input").val().trim();
    console.log(email);
    console.log(zipCode)
    database.ref().push({
        email: email,
        zipCode: zipCode,
    });
// closeing on click
});
// closeing ready
});


$(document).ready(function() {  

    $("#Detailbutton").on("click", function(event) {

        event.preventDefault();


        console.log(movie);

    
        var movie = $("#movie-input").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        // Creating an AJAX call for the specific movie button being clicked
            $.ajax({
            url: queryURL,
            method: "GET"
            }).done(function(response) {
                console.log(response);

                // puting in div 
                var holder = $("<div class='movie'>");
                //GETing title
                var title = response.Title;
                var tdisplay = $("<p>").text("Title: " + title); 
                holder.append(title);
                
                //getting rating
                var rating = response.Rated
                console.log(rating);
                //displaying rating
                var rdisplay = $("<p>").text("Rating: " + rating);
                holder.append(rdisplay);

                //geting year
                var released = response.Released;
                //Realase display
                var Realasedisplay = $("<p>").text("Released Date: " + released);
                holder.append(Realasedisplay);

                //getting plot
                var plot = response.Plot;
                //displaying plot
                var plotdisplay = $("<p>").text("Plot: " + plot);
                holder.append(plotdisplay);

                //get runtime
                var runtime = response.Runtime;
                var rundisplay = $("<p>").text("Runtime: " + runtime); 
                holder.append(rundisplay);
               
                //getting writers 
                var writers = response.Writer;
                var writerdis = $("<p>").text("Writers: " + writers);
                holder.append(writerdis); 
                //getting director
                var director = response.Director
                var dirdis = $("<p>").text("Director: " + director);
                holder.append(dirdis);
                //getting img
                var imgUrl = response.Poster;
                var imgdisplay = $("<img>").attr("src", imgUrl);
                holder.append(imgdisplay);

                $("#AdamsApi").prepend(holder);
                });
//closing on click      
});
//closeing ready
});
// youtube api will hide when loaded
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