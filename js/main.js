var email = prompt("Inserisci la tua mail")

// array lista email
var emailList = ["Gabriele", "Luca", "Marco"]

console.log(emailList[0]);
console.log(emailList[1]);
console.log(emailList[2]);

// avvio ciclo for
for (var i = 0; i <= emailList.lenght; i++) {
  if (email==emailList) {
    console.log("è nella lista");
  } else {
    console.log("non è nella lista");
  }
}

document.getElementById("welcome").innerHTML = "La tua mail " + email ;
