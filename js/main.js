var email = prompt("Inserisci il tuo nome")
var result = document.getElementById('result')

// array lista email
var emailList = ["gabriele", "luca", "marco"]

// avvio ciclo for
var verify = false;

for (var i = 0; i < emailList.length; i++) {
  if (email==emailList[i]) {
    console.log("è nella lista");
    verify = true;
  }
}

// se verify è vero sei in lista altrimenti no
if (verify == true) {
  result.innerHTML = "sei in lista"
}
else {
  result.innerHTML = " non sei in lista"
}
