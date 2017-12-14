// construct the url with parameter values
 var apikey = "xwnuct9pwa826d3qjnruj2h2";

 var baseUrl = "http://data.tmsapi.com/v1.1";

 var showtimesUrl = baseUrl + '/movies/showings';

 var zipCode = "78701";

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

  // callback to handle the results
  function dataHandler(data) {
  
  $(document.body).append('<p>Found ' + data.length + ' movies showing within 5 miles of ' + zipCode+':</p>');

  var movies = data.hits;

  $.each(data, function(index, movie) {

    var movieData = '<div class="tile"><img src="http://developer.tmsimg.com/' + movie.preferredImage.uri + '?api_key='+apikey+'"><br/>';

    movieData += movie.title;

    if (movie.ratings) { movieData += ' (' + movie.ratings[0].code + ') </div>' };

    $(document.body).append(movieData);

  });

}
=======
$(document).ready(function(){

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
	
	//close ready 
	});
>>>>>>> 6760e55aa8d9b26bedd8f501942794aad4a93edf
