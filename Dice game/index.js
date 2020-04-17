
document.querySelector("button").addEventListener("click",newroll);

function newroll(){
var rnumber1= Math.ceil(Math.random()*6);//number bet 1-6
var rnumber2=Math.ceil(Math.random()*6);

console.log(rnumber1);
console.log(rnumber2);

var randdiceimg1="dice"+rnumber1+".png";
var randdiceimg2="dice"+rnumber2+".png";

var imgsrc1="images/"+randdiceimg1;
var imgsrc2="images/"+randdiceimg2;

var selectedimg1=document.querySelectorAll("img")[0];
var selectedimg2=document.querySelectorAll("img")[1];

selectedimg1.setAttribute("src",imgsrc1);
selectedimg2.setAttribute("src",imgsrc2);


  document.querySelector("h1").innerHTML="Total is :"+(rnumber1+rnumber2);

}
