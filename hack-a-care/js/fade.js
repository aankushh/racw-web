var hellos = ["Ideate", "Innovate", "Invent"];
var index = 0; // index of the currently displayed hello
$("#hellos").text(hellos[0]); // start by showing a hello

(function animate() {
  // the function responsibe for the animation
  $("#hellos")
    .fadeOut(1000, function () {
      // first fadeOut #hellos
      index = (index + 1) % hellos.length; // when fadeOut complete, increment the index (check if go beyond the length of the array)
      this.textContent = hellos[index]; // change text accordingly
    })
    .fadeIn(1000, animate); // then fadeIn. When fadeIn finishes, call animate again
})();
