const Email = document.getElementById("myEmail");
let myUsername = document.getElementById("myUsername");
const myButton = document.getElementById("myButton");



myButton.onclick = function() {

let myEmail = Email.value;    
let Username = myEmail.slice(0 , myEmail.indexOf('@'));

myUsername.textContent = Username;

}
