

var randomNumber1=Math.floor(Math.random() * 6)+1;
var source="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",source);
var randomNumber2=Math.floor(Math.random()*6)+1;
var source2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",source2);
if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
document.querySelector("h1").textContent="🚩 Player 1 Wins!";

}
else{
  document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
