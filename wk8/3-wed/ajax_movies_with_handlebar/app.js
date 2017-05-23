
// $.ajax({
//   url: 'http://www.omdbapi.com',
//   data: {s: keyword}
// })



 $(document).ready(function(){

  $(".search").click(function(){

    $title = $("input:text[name='movie_title']").val()
    console.log($title)
    $url = "http://omdbapi.com/?s=" + $title

    $.ajax({
      url: $url,
      method: "GET",

    }).done(function(result){

      var movies = result.Search;
      $( ".movie" ).remove();

      movies.forEach(function(movie){

        var source = $('#movie-template').html(); //grab the template string
        var templateFunction = Handlebars.compile(source); //turn into template string into a function
        var html = templateFunction(movie); //html with template & data merged together
        $('.wrapper').append(html);

      });

    }).fail(function(){
      console.log('Noo!!!!!!!!');
    });
  });
 });
