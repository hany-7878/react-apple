$(document).ready(function () {
  // Click event on h3 or toggle-btn span
  $('.footer-links-wrapper h3').on('click', function () {
    // Toggle the next ul (links list)
    $(this).next('ul').slideToggle();

  });
});

