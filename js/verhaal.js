// Nav Scroll
var titelEl = document.querySelector('.titlebox');
var mijnLijst = document.querySelector('a.mijn-lijst');
var lijstIcon = document.querySelector('.lijst-icon');

window.top.addEventListener("scroll", function(){
  if (window.top.pageYOffset > 1700){
    console.log("6");
} else if (window.top.pageYOffset > 1400){
    console.log("5");
} else if (window.top.pageYOffset > 1000){
    console.log("4");
} else if (window.top.pageYOffset > 700){
    console.log("3");
} else if (window.top.pageYOffset > 500){
    titelEl.classList.add('hidetitle');
    console.log("2");
} else if (window.top.pageYOffset > 150){
    titelEl.classList.remove('hidetitle');
      console.log("1");
    }
})
