function updBalance(){
return document.getElementById("70000").innerText;

//var balance0 = document.getElementById('balance0').value = 70000;
}
var balance = document.getElementById('balance0');

/*function getOutput() {
    //return document.getElementById('balance').innerText=70000;
    return document.getElementById('balance').innerText=write(70000);
}
//var balance2 = parseFloat(document.getElementById("amount").value)
*/
function upBalance(){
balance.addEventListener('click', function(){
    getOutput();
})
}
