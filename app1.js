
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

  
  document.querySelector("#initial-greeting").innerHTML = "<br>" + initialGreeting + "<br>";
  


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