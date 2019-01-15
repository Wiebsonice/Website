

    // Nav Scroll
    var navEl = document.querySelector('.page-header');
    var mijnLijst = document.querySelector('a.mijn-lijst');
    var lijstIcon = document.querySelector('.lijst-icon');

    window.top.addEventListener("scroll", function(){
      if (window.top.pageYOffset > 320){
          navEl.classList.add("colorswitch");
          mijnLijst.classList.add("text-switch");
          lijstIcon.src = "assets/opgeslagen.png";

      } else if (window.top.pageYOffset > 100){
          navEl.classList.remove("colorswitch");
          mijnLijst.classList.remove("text-switch");
          lijstIcon.src = "assets/opgeslagen-w.png";
      }
    })


    // Show more mobile
    var showEl = document.querySelector('.see-more');
    var filterEl = document.querySelector('.genre-filters');
    var clicked = false;

    showEl.addEventListener('click', function() {
        filterEl.classList.toggle('show-more')


        if (clicked == true) {
            showEl.textContent = 'Laat nog (5) verhalen zien  +';
            clicked = false;
        } else {
            showEl.textContent = 'Laat minder zien';
            clicked = true;
        }
    });



    // Filters met knop
    var filters = document.querySelectorAll("fieldset.genre input");
    var submit = document.querySelector('fieldset.footer button');
    var sortTitle = document.querySelector('.sort-title');
    var sortButtons = document.querySelectorAll(".sort-close")
    var sortSection = document.querySelector(".sortby")
    var orderBtn = document.querySelector(".sort-order")

    for (var i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', function() {
            var selectedFields = document.querySelectorAll("fieldset.genre input:checked");
            var total = 0;

            for (var i = 0; i < selectedFields.length; i++) {
                total += parseInt(selectedFields[i].value);
            }

            if ( total === 0 ) {
                submit.textContent = 'Toon 99 verhalen';
                sortTitle.textContent = 'Alle verhalen (99)';
                sortButtons[0].classList.remove('sort-show');
                sortButtons[1].classList.remove('sort-show');
                sortSection.classList.remove('sorteer-padding');
                orderBtn.classList.remove('sortbottom');
            } else {
                submit.textContent = 'Toon ' + total + ' verhalen';
                sortTitle.textContent = '(' + total + ') Gevonden verhalen';
                sortButtons[0].classList.add('sort-show');
                sortButtons[1].classList.add('sort-show');
                sortSection.classList.add('sorteer-padding');
                orderBtn.classList.add('sortbottom');
            }
        });
    }
