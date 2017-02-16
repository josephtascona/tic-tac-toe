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
   var a = tl.innerHTML.indexOf('x');
   var b = tm.innerHTML.indexOf('x');
   var c = tr.innerHTML.indexOf('x');
   var d = ml.innerHTML.indexOf('x');
   var e = mm.innerHTML.indexOf('x');
   var f = mr.innerHTML.indexOf('x');
   var g = bl.innerHTML.indexOf('x');
   var h = bm.innerHTML.indexOf('x');
   var i = br.innerHTML.indexOf('x');
   var a1 = tl.innerHTML.indexOf('o');
   var b1 = tm.innerHTML.indexOf('o');
   var c1 = tr.innerHTML.indexOf('o');
   var d1 = ml.innerHTML.indexOf('o');
   var e1 = mm.innerHTML.indexOf('o');
   var f1 = mr.innerHTML.indexOf('o');
   var g1 = bl.innerHTML.indexOf('o');
   var h1 = bm.innerHTML.indexOf('o');
   var i1 = br.innerHTML.indexOf('o');
   function horizontal() {
      if (a + b + c === 0) {
         alert('x has won horizontally!!');
      } else if ((d + e + f) === 0) {
         alert('x has won horizontally!!');
      } else if ((g + h + i) === 0) {
         alert('x has won horizontally!!');
      }
      // } else if ((tl.innerHTML.indexOf('o') === 0) && (tm.innerHTML.indexOf('o') && tr.innerHTML.indexOf('o') === 0)) {
      //    alert('o has won horizontally!!');
      // } else if ((ml.innerHTML.indexOf('o') === 0) && (mm.innerHTML.indexOf('o') && mr.innerHTML.indexOf('o') === 0)) {
      //    alert('o has won horizontally!!');
      // } else if ((bl.innerHTML.indexOf('o') === 0) && (bm.innerHTML.indexOf('o') && br.innerHTML.indexOf('o') === 0)) {
      //    alert('o has won horizontally!!');
      // }
   }
   function vertical() {

   }
   function diagonal() {

   }
   $('.grid').on('click', function() {
      var retVal = prompt("x or o : ", "???");
      if (retVal === "x") {
         $(this).text('x');
      } else {
         $(this).text('o');
      }
      horizontal();
      vertical();
      diagonal();
   });
});
