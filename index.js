
//          Random Number of Left Dice
var randomNumber1 = parseInt( (Math.random()*6) + 1 );
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

//         Random Number of Right Dice
var randomNumber2 = parseInt( (Math.random()*6) + 1 );
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//        Chage Result (h1) based on Dice numbers
if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent="Player 2 Win 🚩";
}

else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Win";
}
else {
  document.querySelector("h1").textContent="Draw!";
}
