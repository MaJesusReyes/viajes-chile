//Jquery, Scroll Smooth function
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 100, function(){
            window.location.hash = hash;
          });
        }
    });
});

//Navbar color change
window.addEventListener('scroll', function(){
    document.querySelector('nav').classList.toggle('bg-info', window.scrollY < 20);
    document.querySelector('nav').classList.toggle('bg-success', window.scrollY >= 20);
});


//Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});