
document.addEventListener('DOMContentLoaded', function () {


  //Menu toggle burger button
  let menuButton = document.getElementById('burger-menu');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('fa-bars');
    menuButton.classList.toggle('fa-times');
  });


  //Greetings
  var date = new Date();
  var hour = date.getHours();
  var month = date.getMonth();
  var religiousSongs;
  var religiousHoliday;
  var initialGreeting;

  if (hour < 5) {
    initialGreeting = "Salut!";
  }
  if (hour < 10) {
    initialGreeting = "Bună dimineața!";
  }
  else if (hour < 18) {
    initialGreeting = 'Bună ziua!';
  }
  else if (hour < 24) {
    initialGreeting = "Bună seara!";
  }




  if (month == 0) {
    religiousHoliday = "Botezul Domnului (Boboteaza - Dumnezeiasca Arătare)";
    religiousSongs = "În Iordan Botezându-Te Tu, Doamne, închinarea Treimii s-a arătat. Că Glasul Părintelui a mărturisit Ţie, Fiu Iubit pe Tine numindu-Te; şi Duhul, în Chip de Porumbel, a adeverit întărirea Cuvântului, Cel Ce Te-ai arătat, Hristoase Dumnezeule şi lumea ai luminat, Slavă Ţie.";
  }

  if (month == 1) {
    religiousHoliday = "Întâmpinarea Domnului";
    religiousSongs = "Bucură-te, Ceea ce eşti Plină de har, Născătoare de Dumnezeu Fecioară; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru, luminând pe cei dintru întuneric. Veseleşte-te şi tu, bătrânule drepte, cel ce ai primit în braţe pe Izbăvitorul sufletelor noastre, Cel Ce ne-a dăruit nouă şi Învierea.";
  }

  if (month == 2) {
    religiousHoliday = "Buna Vestire";
    religiousSongs = "Astăzi este începutul mântui­rii noastre şi arătarea Tainei ce­lei din veac. Fiul lui Dumnezeu, Fiu Fecioarei Se face şi Gavriil Harul Îl binevesteşte. Pentru aceasta şi noi, împreună cu Dânsul, Născătoarei de Dum­nezeu să-i strigăm: Bucură-te, cea Plină de har, Domnul este cu tine!";
  }

  if (month == 3) {
    religiousHoliday = "Învierea Domnului (Sfintele Paști)";
    religiousSongs = "Hristos a înviat din morți cu moartea pe moarte călcând și celor din morminte viață dăruindu-le.";
  }

  if (month == 4) {
    religiousHoliday = "Înălțarea Domnului";
    religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
  }

  if (month == 5) {
    religiousHoliday = "Pogorârea Sfântului Duh";
    religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
  }

  if (month == 6) {
    religiousHoliday = "Sfântul Mare Prooroc Ilie Tesviteanul";
    religiousSongs = "Cel ce a fost înger în trup, temeiul proorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie Măritul, care a trimis de sus lui Elisei dar, goneşte bolile şi pe cei leproşi curăţeşte. Pentru aceasta şi celor ce-l cinstesc pe dânsul le izvorăşte tămăduiri.";
  }

  if (month == 7) {
    religiousHoliday = "Schimbarea la față a Domnului";
    religiousSongs = "Schimbatu-Te-ai la Faţă în munte, Hristoase Dumnezeule, arătând ucenicilor Tăi Slava Ta, pe cât li se putea. Strălucească şi nouă, păcătoşilor, lumina Ta cea pururea fiitoare, pentru rugăciunile Născătoarei de Dumnezeu, Dătătorule de lumină, slavă Ţie.";
  }

  if (month == 8) {
    religiousHoliday = "Înălțarea Sfintei Cruci";
    religiousSongs = "Mântuieşte, Doamne, poporul Tău şi binecuvintează moştenirea Ta; biruinţă binecredincioşilor creştini asupra celui protivnic dăruieşte şi cu Crucea Ta păzeşte pe poporul Tău.";
  }

  if (month == 9) {
    religiousHoliday = "Sfântul Cuvios Dimitrie cel Nou";
    religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Dimitrie, duhul tău.";
  }

  if (month == 10) {
    religiousHoliday = "Intrarea în Biserică a Maicii Domnului";
    religiousSongs = "Astăzi, înainte însemnarea bunăvoinţei lui Dumnezeu şi propovăduirea mântuirii oamenilor, în Templul lui Dumnezeu luminat Fecioara se arată şi pe Hristos tuturor mai înainte Îl vesteşte. Acesteia şi noi cu mare glas să-i strigăm: Bucură-te, Împlinirea rânduielii Ziditorului.";
  }

  if (month == 11) {
    religiousHoliday = "Nașterea Domnului (Crăciunul)";
    religiousSongs = "Naşterea Ta, Hristoase, Dumnezeul nostru, răsărit-a lumii Lumina cunoştinţei; că întru dânsa cei ce slujeau stelelor de la stea s-au învăţat să se închine Ţie, Soarelui dreptăţii, şi să Te cunoască pe Tine, Răsăritul cel de sus, Doamne, slavă Ţie.";
  }

  
  document.querySelector("#initial-greeting").innerHTML = "<br>" + initialGreeting + "<br>";
  document.querySelector("#celebration").innerHTML = "<br>" + religiousHoliday + "<br>";
  document.querySelector("#troparion").innerHTML = "<br>" + religiousSongs + "<br>";





  const items = document.querySelectorAll('#timeline li');

  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () =>
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });

  // Events
  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);

}); 