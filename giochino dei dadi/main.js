var btnLancia = document.getElementById('btnLancia');
var result = document.getElementById('result');

var you = document.getElementById('you');
var computer = document.getElementById('computer');

// evento lancia i dadi
btnLancia.addEventListener("click", function () {
  // variabile del tuo lancio
  var num1 = Math.round (Math.random()*5+1);
  console.log(num1);
  you.innerHTML = "il tuo lancio è " + num1;
  // variabile del lancio del computers
  var num2 = Math.round (Math.random()*5+1);
  console.log(num2);
  computer.innerHTML = "il lancio del tuo avversario è " + num2;

  if (num1 > num2) {
    result.innerHTML = "hai vinto!";
  }
  else if (num1 < num2) {
    result.innerHTML = "hai perso!";
  }
  else {
    result.innerHTML = "pareggio, rilancia!";
  }
});
