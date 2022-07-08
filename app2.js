$(document).ready(function () {

  //h2 activity fields animated text
  var skills = ['TROPAR', 'RUGĂCIUNI', 'ÎNVĂȚĂTURI','CUGETĂRI', 'CALENDAR', 'ICOANE', 'MUZICĂ'],
    part,
    i = 0,
    offset = 0,
    len = skills.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 153,
    speed = 12;
  var wordsSkills = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= skills[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = skills[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.activity-fields').text(part);
    }, speed);
  };

  $(document).ready(function () {
    wordsSkills();
  });

  //My SVG CT logo
  var iterationCount = $('.t-logo').css("animation-iteration-count");
  animate(iterationCount - 1)

  function animate(count) {
    if (count == 0) {
      $('.t-logo').css({
        'animation': 'draw1 3.5s',
      });
    }
    if (count == 1) {
      $('.t-logo').css({
        'animation': 'draw2 3.5s',
      });
    }
    if (count == 2) {
      $('.t-logo').css({
        'animation': 'draw3 3.5s',
      });
    }
    $('.t-logo:first').one("animationend", function () {
      if (count > 0)
        animate(count - 1)
      else
        animate(iterationCount - 1)
    })
  }

  //Rotating picture at click
  $('#picture').on('click', function () {
    $(this).toggleClass('flipped');
  })

  //Social media buttons at hover
  $(".share").hover(function () {
    $(".share").toggleClass("visible");
  });
  $(".share").hover(function () {
    $(".social").addClass("visible")
  }, function () {
    $(".social").removeClass("visible")
  })



  var currentSlide;
  var rand;
  $(document).ready(function () {
    currentSlide = Math.floor((Math.random() * $('.item').length));
    rand = currentSlide;
    $('#carousel-example-generic').carousel(currentSlide);
    $('#carousel-example-generic').fadeIn(3000);
    setInterval(function () {
      while (rand == currentSlide) {
        rand = Math.floor((Math.random() * $('.item').length));
      }
      currentSlide = rand;
      $('#carousel-example-generic').carousel(rand);
    }, 20000);
  });

  $('.carousel').carousel({
    interval: 20000
  })


})