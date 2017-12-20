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
// closeing on click
});
// closeing ready
});


$(document).ready(function() {  

    $("#Detailbutton").on("click", function(event) {

        event.preventDefault();


        var movie = $("#movie-input").val();
        var zipCode = $("#zipcode-input").val();

        console.log(movie);



        var apikey = "xwnuct9pwa826d3qjnruj2h2";
        var baseUrl = "http://data.tmsapi.com/v1.1";
        var showtimesUrl = baseUrl + '/movies/showings?startDate=2017-12-19&zip=' + zipCode +'&api_key=xwnuct9pwa826d3qjnruj2h2';
        var d = new Date();

        var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();


        // send off the query
        $.ajax({
            url: showtimesUrl,
            method: "GET"
        }).done(function(response){
            console.log(response);

            for (var i = 0; i < response.data; i++) {
                console.log(i);
                $("#AdamsApi").append("hello");
                }
            });
// closes on click
        });
//closes ready 

$(document).ready(() => {
    $('#searchForm').on('Detailbutton', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });

});

function getMovies(searchText) {
    axios.get('https://www.omdbapi.com?s='+searchText)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index, movie) => {
            output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
            `;
        });

        $('#movies').html(output);
    })
    .catch((err) => {
        console.log(err);
    });
}

function movieSelected(id) {
    sessionStorage.setItem('movie-input', id);
    window.location = 'movie.html';
    return false;
}

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');

    axios.get('https://www.omdbapi.com?i='+movieId)
    .then((response) => {
        console.log(response);
        let movie = response.data;

        let output = `
            <div class = "row">
                <div class = "col-md-4">
                    <img src="${movie.Poster}" class="tumbnail">
                </div>
                <div class = "col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                    </ul>   
                </div>
            </div>
            <div class="row">
                <div class="well">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr />
                    <a href="https://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default">Go back</a>
                </div>
            </div>
        `;

        $('#AdamsApi').html(output);
    })
    .catch((err) => {
        console.log(err);
    });
}

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