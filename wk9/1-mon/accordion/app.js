

// $("button").click(function(){
//     $("p").toggleClass("main");
// })


$('.main').on('click', function(event){
  $( ".sub" ).toggleClass("hidden");

  if (!$( ".codingsub" ).hasClass( "hidden" )){
     $( ".codingsub" ).toggleClass("hidden");
  }
 
})

$('.coding').on('click', function(event){
  $( ".codingsub" ).toggleClass("hidden");
  $('.coding').toggleClass("selected");
})



//
// $('button').on('click', function(){
//   var inputValue = $('input').val();  //value
//   var $newListItem = $('<li>').text(inputValue); //creating new list item
//   $list.append($newListItem);
// })
//
