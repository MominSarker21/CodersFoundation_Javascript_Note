
// Single Line Comment
/* Multiple Line Comment */

/* =====x=====x===== Variable Type Coercion =====x=====x===== */
const myName = "Momin Sarker";
const myAge = 28;
console.log("My Name is " + myName + " and My age is " + myAge);
console.log()
/*=====x=====x=====x=====x=====*/
var  job = 'web design';
const isMarried = true;
console.log("my job is " + job + " and my marital status is " + isMarried);

console.log(myName + " " + myAge + " " + job + " " + isMarried)

/* =====x=====x===== Variable Mutation =====x=====x===== */
var age = 24;
var job = "Web Devloper";
//alert(age + ' ' + job);

//var yName  = prompt("Enter your name : ");
//var yAge  = prompt("Enter your age : ");
//console.log(yName + " " + yAge)

/* =====x=====x===== Basic Operators =====x=====x===== */
var currentYear = 2022;
var birthYear = 1994;
var actualOld  = currentYear - birthYear;
console.log('I am ' + actualOld + " year's old");

/* =====x=====x===== Logical Operators =====x=====x===== */
var momin = 28;
var aryan = 6;
var logic = momin > aryan;
console.log(logic);

/* =====x=====x===== Typeof Operators =====x=====x===== */
var name1 = 'sarker';
var age = 23;
console.log(typeof name1);
console.log(typeof age);
console.log(typeof logic);

/* =====x=====x===== External js =====x=====x===== */
var z  = 20;
var x = 20;
var v= z+x;
document.getElementById('rina').innerHTML=v;

/* =====x=====x===== Operatior Precedence =====x=====x===== */

var bYear = 2004;
var pYear  = 2022;
var aYear  = 18;
var result = pYear-bYear >= aYear;
document.write(result,"<br>");

/* =====x=====x===== Operatior Precedence =====x=====x===== */
var x,y;
x = y = (10+10)*10/2;
document.write(x,"<br>",y,"<br>");

x = x + 10;
document.write(x,"<br>");

x -= 10;
document.write(x,"<br>")

x *= 10;
document.write(x,"<br>")

x /= 10;
document.write(x,"<br>")

/* =====x=====x===== If, Else Statements =====x=====x===== */

var yName = 'rahim';
var mStatus = 'married';
if(mStatus === 'married'){
    document.write(yName + " he is married");
}else{
    document.write('he is single');
}

/* =====x=====x===== Boolean Logic =====x=====x===== */
var a = 10;
var b = 20;
var c = a>b;
document.write('<br>'+ c + '<br>');

/* =====x=====x===== Boolean Logic =====x=====x===== */
/*
var cName = prompt('Enter Your Name : ')
var cPhone = prompt('Enter Your Phone Number : ')
var buyer = prompt('How many pencil do you need : ');
var price = 10;
var stock = 4;


if (buyer==0) {
    document.write('Hello! ' + cName + '<br>' + 'Mobile : ' + cPhone +'<br>' +' You have entered invalid Number, Please Press a Valid Number');
}else if(buyer<=stock){
    document.write('Hello! ' + cName + '<br>' + 'Mobile : ' + cPhone +'<br>' +'You Need to pay ' + buyer*price + " taka.");
}else{
    document.write("sorry out of stock");
}
*/
/* =====x=====x===== Boolean Logic =====x=====x===== */

var age =26 ;
if (age >= 1 && age <= 7 ) {
    document.write('you are a children');
}else if(age >= 8 && age <= 13) {
    document.write('you are a boy')
}else if(age >= 14 && age <= 18) {
    document.write('you are a teeager')
}else if(age >= 19 && age <= 25) {
    document.write('you are adult')
}else{
    document.write('you are mature' + '<br>');
}


/* =====x=====x===== Truthy & Falsy =====x=====x===== */

var a = 0;
if (a) {
    document.write('Variable is defined'+ '<br>');
}else{
    document.write('Variable is undefined'+ '<br>');
}


var a = 0;
if (a || a === 0) {
    document.write('Variable is defined'+ '<br>');
}else{
    document.write('Variable is undefined'+ '<br>');
}

/* =====x=====x===== Truthy & Falsy =====x=====x===== */ 