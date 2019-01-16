// Nav Scroll
var titelEl = document.querySelector('.titlebox');
var mijnLijst = document.querySelector('a.mijn-lijst');
var lijstIcon = document.querySelector('.lijst-icon');

window.top.addEventListener("scroll", function(){
 if (window.top.pageYOffset > 500){
    titelEl.classList.add('hidetitle');

} else if (window.top.pageYOffset < 500){
    titelEl.classList.remove('hidetitle');

    }
})
