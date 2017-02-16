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
   function horizontal() {
      if (tl.innerHTML.indexOf('x') + tm.innerHTML.indexOf('x') + tr.innerHTML.indexOf('x') === 0) {
         alert('x has won horizontally!!');
      } else if (ml.innerHTML.indexOf('x') + mm.innerHTML.indexOf('x') + mr.innerHTML.indexOf('x') === 0) {
         alert('x has won horizontally!!');
      } else if (bl.innerHTML.indexOf('x') + bm.innerHTML.indexOf('x') + br.innerHTML.indexOf('x') === 0) {
         alert('x has won horizontally!!');
      } else if (tl.innerHTML.indexOf('o') + tm.innerHTML.indexOf('o') + tr.innerHTML.indexOf('o') === 0) {
         alert('o has won horizontally!!');
      } else if (ml.innerHTML.indexOf('o') + mm.innerHTML.indexOf('o') + mr.innerHTML.indexOf('o') === 0) {
         alert('o has won horizontally!!');
      } else if (bl.innerHTML.indexOf('o') + bm.innerHTML.indexOf('o') + br.innerHTML.indexOf('o') === 0) {
         alert('o has won horizontally!!');
      }
   }
   function vertical() {
      if (tl.innerHTML.indexOf('x') + ml.innerHTML.indexOf('x') + bl.innerHTML.indexOf('x') === 0) {
         alert('x has won vertically!!');
      } else if (tm.innerHTML.indexOf('x') + mm.innerHTML.indexOf('x') + bm.innerHTML.indexOf('x') === 0) {
         alert('x has won vertically!!');
      } else if (tr.innerHTML.indexOf('x') + mr.innerHTML.indexOf('x') + br.innerHTML.indexOf('x') === 0) {
         alert('x has won vertically!!');
      } else if (tl.innerHTML.indexOf('o') + ml.innerHTML.indexOf('o') + bl.innerHTML.indexOf('o') === 0) {
         alert('o has won vertically!!');
      } else if (tm.innerHTML.indexOf('o') + mm.innerHTML.indexOf('o') + bm.innerHTML.indexOf('o') === 0) {
         alert('o has won vertically!!');
      } else if (tr.innerHTML.indexOf('o') + mr.innerHTML.indexOf('o') + br.innerHTML.indexOf('o') === 0) {
         alert('o has won vertically!!');
      }
   }
   function diagonal() {
      if (tl.innerHTML.indexOf('x') + mm.innerHTML.indexOf('x') + br.innerHTML.indexOf('x') === 0) {
         alert('x has won diagonally!!');
      } else if (tr.innerHTML.indexOf('x') + mm.innerHTML.indexOf('x') + bl.innerHTML.indexOf('x') === 0) {
         alert('x has won diagonally!!');
      } else if (tl.innerHTML.indexOf('o') + mm.innerHTML.indexOf('o') + br.innerHTML.indexOf('o') === 0) {
         alert('o has won diagonally!!');
      } else if (tr.innerHTML.indexOf('o') + mm.innerHTML.indexOf('o') + bl.innerHTML.indexOf('o') === 0) {
         alert('o has won diagonally!!');
      }
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
