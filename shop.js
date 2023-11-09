//function of like items
function fav() {
  //var heart=document.getElementById('pp');
  body.style.color = "red";
}

//function of deleted items from the cart
/*
function delete(){
if(){

}
}*/
document.getElementsByClassName("totpr").innerHTML += "hello";
//function of quantity of items added

function add() {
  var quantity;
  var btn1 = document.getElementsByClassName("btn btn-primary");
  btn1.addEventListener("click", document.getElementById("qnt2").value++);
}

function remove() {
  var quantityrem;
  var btn2 = document.getElementById("es-");
  while (document.getElementById("qnt2").value > 0) {
    btn2.addEventListener("click", document.getElementById("qnt2").value--);
  }
}

//function of total price
