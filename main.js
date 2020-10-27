
$(document).ready( function() {

  //Interazione click mouse
  $('.next').click( function () {
    prevImage('next');
  });

  $('.prev').click( function () {
    prevImage('prev');
  });
})

//Navigare avanti e indietro nelle slides
function prevImage(direction) {
  var dinamycImage = $('.images img.active');
  var dinamycCircle = $('.nav i.active');

  //Reset
  dinamycImage.removeClass('active');
  dinamycCircle.removeClass('active');

  //Next
  if (direction === 'next') {
    if (dinamycImage.hasClass('last')) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      dinamycImage.next('img').addClass('active');
      dinamycCircle.next('i').addClass('active');
    }
  }

  //Preview
  else if (direction === 'prev') {
    if (dinamycImage.hasClass('first')) {
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      dinamycImage.prev('img').addClass('active');
      dinamycCircle.prev('i').addClass('active');
    }
  }
}
