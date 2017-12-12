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