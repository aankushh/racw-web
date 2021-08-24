function myFunction() {
  // var y = document.getElementById("burger");
  // if (y.style.position === "fixed") {
  //   y.style.position = "absolute";
  //   myfunction2();
  // } else {
  //   y.style.position = "fixed";
  //   myfunction2();
  // }
}
function myfunction2() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
    x.style.position = "fixed";
  } else {
    x.style.display = "flex";
  }
}
function bleh() {
  setTimeout(() => {
    var y = document.getElementById("burger");
    if (y.style.position === "fixed") {
      y.style.position = "absolute";
      myfunction2();
    } else {
      y.style.position = "fixed";
      myfunction2();
    }
  }, 500);
}
set;
