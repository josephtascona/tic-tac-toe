// function getValue() {
   // var retVal = prompt("x or o : ", "???");
   // if (retVal === "x") {
   //    $('.grid').text('x');
   // } else {
   //    $('.grid').text('o');
   // }
// }


$(document).ready(function() {
   var tl = document.getElementById('tl');
   var tm = document.getElementById('tm');
   var tr = document.getElementById('tr');
   var ml = document.getElementById('ml');
   var mm = document.getElementById('mm');
   var mr = document.getElementById('mr');
   var bl = document.getElementById('bl');
   var bm = document.getElementById('bm');
   var br = document.getElementById('br');
   $('.grid').on('click', function() {
      var retVal = prompt("x or o : ", "???");
      if (retVal === "x") {
         $(this).text('x');
      } else {
         $(this).text('o');
      }
   })
   function horizontal() {
      // if ((tl.innerHTML.indexOf('x') === 0) && (tm.innerHTML.indexOf('x') && tr.innerHTML.indexOf('x') === 0)) {
      if (tl.innerHTML.indexOf('x') === 0) {
         alert('x has won horizontally!!');
      } else if ((ml.innerHTML.indexOf('o') === 0) && (mm.innerHTML.indexOf('o') && mr.innerHTML.indexOf('o') === 0)) {
         alert('x has won horizontally!!');
      } else if ((bl.innerHTML.indexOf('o') === 0) && (bm.innerHTML.indexOf('o') && br.innerHTML.indexOf('o') === 0)) {
         alert('o has won horizontally!!');
      } else if ((tl.innerHTML.indexOf('o') === 0) && (tm.innerHTML.indexOf('o') && tr.innerHTML.indexOf('o') === 0)) {
         alert('o has won horizontally!!');
      } else if ((ml.innerHTML.indexOf('o') === 0) && (mm.innerHTML.indexOf('o') && mr.innerHTML.indexOf('o') === 0)) {
         alert('o has won horizontally!!');
      } else if ((bl.innerHTML.indexOf('o') === 0) && (bm.innerHTML.indexOf('o') && br.innerHTML.indexOf('o') === 0)) {
         alert('o has won horizontally!!');
      }
   }
   function vertical() {

   }
   function diagonal() {

   }
   horizontal();
   vertical();
   diagonal();
});
