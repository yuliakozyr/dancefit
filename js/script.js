$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');

  });
});

//For smooth scroll after clicking on the menu item
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 80
    }, 2000);
  })
});