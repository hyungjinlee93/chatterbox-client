// var Friends = {

//   // $().click(function() {
//     $(this).addClass('makeBold');
//     // $().css(font-weight:bold;)
//   });
// };

document.getElementByClass("username").addEventListener("click", makeBold);

var makeBold = function () {
  $(this).addClass('makeBold');
}