var first = prompt("Enter Your Name");
var second = "Manish";

document.getElementsByClassName("p1")[0].innerHTML = first;
document.getElementsByClassName("p2")[0].innerHTML = second;

var randomNumber1 = Math.floor((Math.random())*6 + 1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src" , randomImage1);




var randomNumber2 = Math.floor((Math.random())*6 + 1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src" , randomImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = first + "  Wins!!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = second + " wins!!!";
}
else{
    document.querySelector("h1").textContent="Ops!! It's a Draw";
}

document.querySelector("h3").style.visibility="visible";