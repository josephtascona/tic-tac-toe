// function getValue() {
   // var retVal = prompt("x or o : ", "???");
   // if (retVal === "x") {
   //    $('.grid').text('x');
   // } else {
   //    $('.grid').text('o');
   // }
// }
$('.grid').on('click', function() {
   var retVal = prompt("x or o : ", "???");
   if (retVal === "x") {
      $(this).text('x');
   } else {
      $(this).text('o');
   }
})
