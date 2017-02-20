$(document).ready(function() {
  var sound = document.getElementById('hadouken-sound');
  $('.ryu').mouseenter(function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    })
    .mouseleave(function() {
      $('.ryu-ready').hide();
      $('.ryu-still').show();
    })
    .mousedown(function() {
      $('.ryu-throwing').show();
      $('.ryu-ready').hide();
      $('.hadouken').show();
      $(sound)[0].play();

      $('.hadouken').finish().show().animate({
          'left': '1020px'
        },
        500,
        function() {
          $('.hadouken').hide();
          $('.hadouken').css('left', '520px');
        });
    })
    .mouseup(function() {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();

    });
  $(document).on('keydown', function(e) {
      if (e.which == 88) {
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
      }

    });
  $(document).on('keyup', function(e) {
      if (e.which == 88) {

        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
      }

    });
  
  
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

