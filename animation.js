$(document).ready(function () {





  //Text animat cu invataturi biblice
  var teachings = ['Eu sunt Domnul Dumnezeul Tău... să nu ai alți dumnezei afară de Mine', 'Să nu-ți faci chip cioplit şi nici un fel de asemănare a niciunui lucru... Să nu te închini lor, nici să le slujeşti...', 'Să nu iei numele Domnului Dumnezeului tău în deșert, ...', ' Adu-ți aminte de ziua odihnei, ca să o sfinţeşti...', 'Cinstește pe tatăl tău și pe mama ta, ca să-ți fie bine și să trăiești ani mulți ...', 'Să nu ucizi!', 'Să nu fii desfrânat!', 'Să nu furi!', 'Să nu mărturiseşti strâmb împotriva aproapelui tău!', 'Să nu doreşti casa aproapelui tău; să nu doreşti femeia aproapelui tău... şi nimic din câte are aproapele tău!', 'Să iubeşti pe Domnul Dumnezeul tău din toată inima ta, din tot sufletul tău, din tot cugetul tău şi din toată puterea ta!', 'Să iubeşti pe aproapele tău ca pe tine însuţi!', 'Să nu vă jurați nicidecum!', 'Adunați-vă comori în cer!', 'Când faci milostenie, nu trâmbiţa înaintea ta...', 'Când postiți, nu fiți triști, ca fățarnicii!', 'Nu judecați, ca să nu fiți judecați!', 'Cu judecata cu care judecați, cu aceea veți fi judecați!', 'Cereți și vi se va da!', 'Căutați și veți afla!', 'Bateți și vi se va deschide!', 'Iubiți pe vrăjmașii voștri!', 'Binecuvântați pe cei ce vă blestemă!', 'Faceți bine celor ce vă urăsc!', 'Rugați-vă pentru cei ce vă vatămă și vă prigonesc!', 'Căutați mai întâi Împărăția lui Dumnezeu!', 'Cel ce vine la Mine nu va flămânzi!', 'Cel ce crede în Mine are viață veșnică!', 'Pe cel ce vine la Mine nu-l voi scoate afară!', 'Nu judecați după înfățișare!', 'Să vă iubiţi unul pe altul, precum v-am iubit Eu!', 'Voi sunteţi prietenii Mei, dacă faceţi ceea ce vă poruncesc!', 'Dacă păziţi poruncile Mele, veţi rămâne întru iubirea Mea!', 'Cel ce crede în Mine, chiar dacă va muri, va trăi!', 'Dacă păziţi poruncile Mele, veţi rămâne întru iubirea Mea!', 'De Mă iubiţi, păziţi poruncile Mele!', 'Ce-i folosește omului să câștige lumea întreagă, dacă își pierde sufletul?', 'Ce ar putea să dea omul, în schimb, pentru sufletul său?', 'La Dumnezeu toate sunt cu putinţă!', 'Cel ce va crede şi se va boteza se va mântui!', 'Cel ce nu va crede se va osândi!', 'Cel ce nu-și ia crucea și nu-Mi urmeză Mie nu este vrednic de Mine!', 'Veniți la Mine toți cei osteniți și împovărați, și Eu vă voi odihni pe voi!', 'Pentru orice cuvânt deșert pe care-l vor rosti, oamenii vor da socoteală în ziua judecății!'],
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

  $(document).ready(function () {
    imagesForGreatings();
  });

  var greatingsImage = new Array ();
  greatingsImage[0] = "../f1.png";
  greatingsImage[1] = "../f2.png";
  greatingsImage[2] = "../f3.png";
  greatingsImage[3] = "../f4.png";
  greatingsImage[4] = "../f5.png";
  greatingsImage[5] = "../f6.png";
  greatingsImage[6] = "../f7.png";
  greatingsImage[7] = "../f8.png";
  greatingsImage[8] = "../f9.png";
  greatingsImage[9] = "../f10.png";
  greatingsImage[10] = "../f11.png";
  greatingsImage[11] = "../f12.png";
  greatingsImage[12] = "../f13.png";
  greatingsImage[13] = "../f14.png";
  greatingsImage[14] = "../f15.png";
  greatingsImage[15] = "../f16.png";
  greatingsImage[16] = "../f17.png";
  greatingsImage[17] = "../f18.png";
  greatingsImage[18] = "../f19.png";
  greatingsImage[19] = "../f20.png";
  greatingsImage[20] = "../f21.png";
  var size = greatingsImage.length
  var x = Math.floor(size*Math.random())
  
  $('#randomImagesForGreatings').attr('src',greatingsImage[x]);




  /*Carusel cugetari crestine
  var currentSlide;
  var rand;
  $(document).ready(function () {
    currentSlide = Math.floor((Math.random() * $('.item').length));
    rand = currentSlide;
    $('#carousel-example-generic').carousel(currentSlide);
    $('#carousel-example-generic').fadeIn(5000);
    setInterval(function () {
      while (rand == currentSlide) {
        rand = Math.floor((Math.random() * $('.item').length));
      }
      currentSlide = rand;
      $('#carousel-example-generic').carousel(rand);
    }, 25000);
  });

  $('.carousel').carousel({
    interval: 25000
  })
*/


  //Butoane selectie rugaciuni
  var category = $('.page');
  category.find('dd').hide();

  category.find('dt').on('click', function () {
    // toggle hide an element if is visible
    // or display the element if is not visible
    $(this).next().toggle();
  });


  $(".reload").click(function (ev) {
    ev.preventDefault();
    location.reload();
  });

})