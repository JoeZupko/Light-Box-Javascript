//Joe Zupko 4-14-2015

//////////// add overlay to html ////////////
var $overlay = $('<div id="overlay"></div>'); //string to create div (overlay) as jQuery variable
var $image = $('<img>'); //select image tag as jQuery variable
var $caption = $('<p></p>');

$overlay.append($image); //add image to overlay
$overlay.append($caption); //add caption to overlay
$('body').append($overlay); //add overlay to body


//////////// capture click event on image link ////////////
$('#imageGallery a').click(function(event){ //annonymous function with event parameter
  event.preventDefault(); //stops default event from happening (image loading)
  var imageLocation = $(this).attr('href'); //gets href attribute from clicked 'a' tag in imageGallery
  $image.attr('src', imageLocation); //set src attribute to imageLocation variable
  $overlay.show(); //shows the overlay
  var captionText = $(this).children('img').attr('alt'); //get the childs alt attribute
  $caption.text(captionText);
});


//////////// click event to hide overlay ////////////
$overlay.click(function(){ //annonymous function to hide overlay
  $overlay.hide();
});