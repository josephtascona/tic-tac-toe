$(function() {
  var count = 0;
  $('.box').on('click', function() {
    if ($(this).text() === "") {
      $(this).append('<p>x</p>')
    }
  });
});
