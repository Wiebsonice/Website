var loginForm = document.querySelector('.login-box')
var lostEl = document.querySelector('.vergeten')
var foundEl = document.querySelector('.onthouden')
var lostForm = document.querySelector('.recover')
var innerLoginForm = document.querySelector('.login')


 setTimeout(
    function() {
      loginForm.classList.remove('login-hide');
  }, 500);

lostEl.addEventListener('click', function() {
    lostForm.classList.toggle('show-lost');
    innerLoginForm.classList.toggle('opacity');
})

foundEl.addEventListener('click', function() {
    lostForm.classList.toggle('show-lost');
    innerLoginForm.classList.toggle('opacity');
})
