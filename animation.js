$(document).ready(function () {



  //Text animat cu invataturi biblice
  var teachings = ['Să nu iei numele Domnului în deșert!', 'Să nu ai alți dumnezei afară de Mine!', 'Fericiți cei blânzi!', 'Fericiți cei milostivi!', 'Fericiți cei curați cu inima!', 'Fericiți făcătorii de pace!', 'Să nu vă jurați nicidecum!', 'Adunați-vă comori în cer!', 'Unde este comoara ta, acolo va fi și inima ta!', 'Când postiți, nu fiți triști, ca fățarnicii!', 'Nu judecați, ca să nu fiți judecați!', 'Cu judecata cu care judecați veți fi judecați!', 'Cereți și vi se va da!', 'Căutați și veți afla!', 'Bateți și vi se va deschide!', 'Iubiți pe vrăjmașii voștri!', 'Binecuvântați pe cei ce vă blestemă!', 'Faceți bine celor ce vă urăsc!', 'Rugați-vă pentru cei ce vă vatămă și vă prigonesc!', 'Cinstește pe tatăl tău și pe mama ta!', 'Să nu furi!', 'Să nu fii desfrânat!', 'Să nu ucizi!', 'Căutați mai întâi Împărăția lui Dumnezeu!', 'Cel ce vine la Mine nu va flămânzi!', 'Cel ce crede în Mine are viață veșnică!', 'Pe cel ce vine la Mine nu-l voi scoate afară!', 'Nu judecați după înfățișare!', 'Să vă iubiţi unul pe altul, precum v-am iubit Eu!', 'Voi sunteţi prietenii Mei, dacă faceţi ceea ce vă poruncesc!', 'Dacă păziţi poruncile Mele, veţi rămâne întru iubirea Mea!', 'Cel ce crede în Mine, chiar dacă va muri, va trăi!', 'Dacă păziţi poruncile Mele, veţi rămâne întru iubirea Mea!', 'De Mă iubiţi, păziţi poruncile Mele!', 'Ce-i folosește omului să câștige lumea întreagă, dacă își pierde sufletul?', 'Ce ar putea să dea omul, în schimb, pentru sufletul său?', 'Cât de greu vor intra bogaţii în Împărăţia lui Dumnezeu!', 'La Dumnezeu toate sunt cu putinţă!', 'Mulţi dintre cei dintâi vor fi pe urmă, şi din cei de pe urmă întâi!', 'Cerul şi pământul vor trece, dar cuvintele Mele nu vor trece!', 'Cel ce va crede şi se va boteza se va mântui!', 'Cel ce nu va crede se va osândi!', 'Nu vă temeți de cei ce ucid trupul, iar sufletul nu pot să-l ucidă!', 'Temeți-vă mai curând de acela care poate și sufletul și trupul să le piardă în gheena!', 'Oricine va mărturisi pentru Mine înaintea oamenilor, mărturisi-voi și Eu pentru el înaintea Tatălui Meu!', 'Iar de cel ce se va lepăda de Mine înaintea oamenilor și Eu mă voi lepăda de el înaintea Tatălui Meu!', 'Cel ce nu-și ia crucea și nu-Mi urmeză Mie nu este vrednic de Mine!', 'Veniți la Mine toți cei osteniți și împovărați, și Eu vă voi odihni pe voi!', 'Pentru orice cuvânt deșert pe care-l vor rosti, oamenii vor da socoteală în ziua judecății!'],
    part,
    i = Math.floor(Math.random() * teachings.length),
    offset = 0,
    len = teachings.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 153,
    speed = 12;

  var textsTeachings = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= teachings[i].length) {
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
      part = teachings[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.biblical-Teachings').text(part);
    }, speed);
  };

  $(document).ready(function () {
    textsTeachings();
  });



  //Animatie SVG litera T 
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


  //Carusel cugetari crestine
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



  //Butoane selectie rugaciuni
  var category = $('.page');
  category.find('dd').hide();

  category.find('dt').on('click', function () {
    // toggle hide an element if is visible
    // or display the element if is not visible
    $(this).next().toggle();
  });


})