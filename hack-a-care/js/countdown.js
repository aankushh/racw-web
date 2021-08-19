var deadline = new Date(`aug 28, 2021 12:00:00`).getTime();

var x = setInterval(function () {
  var currentTime = new Date().getTime();
  var remaining = deadline - currentTime;
  var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  set(days, hours, minutes, seconds);
}, 1000);
function set(days, hours, minutes, seconds) {
  document.querySelector(`#days`).textContent = days;
  document.querySelector(`#hours`).textContent = hours;
  document.querySelector(`#minutes`).textContent = minutes;
  document.querySelector(`#seconds`).textContent = seconds;
}
/*
1) rota presents 
2) about event
3) timer
4) register button
5) contact
6) footer
*/
