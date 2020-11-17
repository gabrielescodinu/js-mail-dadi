var email = prompt("Inserisci la tua mail")

// array lista email
var emailList = ["Gabriele", "Luca", "Marco"]

console.log(emailList[0]);
console.log(emailList[1]);
console.log(emailList[2]);

for (var i = 0; i <= emailList.lenght; i++) {
  console.log(emailList[i]);
}

document.getElementById("welcome").innerHTML = "La tua mail è " + emailList;
