var btnLancia = document.getElementById('lancia-dadi');

btnLancia.addEventListener("click", function ()) {
  var num1 = Math.round (Math.random()*5+1);
  var num2 = Math.round (Math.random()*5+1);

  document.getElementById('il-tuo-lancio').innerHTML = "Il tuo lancio è " + num1;
}
