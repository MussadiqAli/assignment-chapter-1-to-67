// Chapter 21-25

// task 1;
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName+" "+lastName;
// document.write("Hi "+ fullName+"! greetings");






// task 2;
// var favMobile = prompt("Enter your favourite mobile model");
// document.write("My favourite mobile Phone is: "+ favMobile +"<br>")
// document.write("Length of string: "+ favMobile.length)






// task 3;
// var string = "Pakistan";
// document.write("String: "+ string +"<br>")

// for (var i = 0; i<string.length; i++){
//     if (string[i] == "n"){
//         document.write("index of 'n' is: "+ i +"<br>")
//     }
// }







// task 4
// var ind = "Hello World"
// document.write("String: "+ ind +"<br>")
// document.write("Last index of 'l': "+ ind.lastIndexOf("l") +"<br>")






// task 5
// var string = "Pakistani";
// document.write("String: "+ string +"<br>")
// document.write("character at index '3': "+ string[3] +"<br>")





// task 6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// document.write("Hi "+ firstName + " " + lastName +"! greetings");






//task 7
// var city = "Hyderabad";
// document.write("City: "+city +"<br>");
// document.write("After Replacement: "+ city.replace("Hyder","Islam"));






// task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g , "&")
// document.write(message)





// task 9
// var num = "472";
// document.write("Value: "+num+"<br>")
// document.write("Type: "+ typeof(num) +"<br>")
// num = Number(num);
// document.write("Value: "+num+"<br>")
// document.write("Type: "+ typeof(num) +"<br>")





// task 10
// var input = prompt("Enter something in small letters");
// document.write("User input: "+ input +"<br>");
// input = input.toLocaleUpperCase();
// document.write("Upper case: "+input)





// task 11
// var input = prompt("Enter something");
// var first = input.slice(0,1);
// var last = input.slice(1);
// first = first.toLocaleUpperCase();
// last = last.toLocaleLowerCase();
// document.write("User input : "+ input +"<br>");
// document.write("Title case: "+ first + last)






// task 12
// var num = 35.36 ;
// document.write("Number:"+num+"<br>")
// num = num.toString();
// for (var i=0; i< num.length; i++){
//     if (num.slice(i,i+1) === "."){
//         num.splice(i,1,);
//         break;
//     }
// }
// document.write("Result:"+num)








// task 13
// var username = prompt("Enter username");
// for (var i=0; i< username.length; i++){
//     if (username[i] === "@" || username[i] === "." || username[i] === "," || username[i] === "!"){
//        username = prompt("enter a valid username")
//        i = 0;
//     }
// }
// document.write(username)






// task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var seach = prompt("welcom to ABC bakery. What do want to order:")
// seach = seach.toLocaleLowerCase();
// var flag = false;
// for (var i=0; i< A.length; i++){
//         if (seach === A[i]){
//              flag = true;
//              var index = i;
//             }
//     }
// if (flag === true){
//     document.write(seach +" is avaiable at index "+ index + " in our bakery")
// }
// else{
//     document.write("We are sorry. "+ seach +" is not avaiable in our bakery")
// }






// task 15
// var pasword = prompt("enter password");
// for (var i=0; i<=9; i++){
//     if (pasword[0] == i){
//         pasword = prompt("Password cannot began with a number\nPlease Enter a valid password")
//     }
// }
// if (pasword.length < 6){
//     pasword = prompt("Password must should be 6 charcter long\nPlease enter valid password")
// }
// document.write(pasword)






// task 16
// var university = "University of Karachi";
// university = university.split("")
// for(var i = 0; i<university.length; i++){
//     document.write(university[i] +"<br>")
// }






// task 17
// var input = "Pakistan";
// var index = input.length-1;
// document.write("User input: "+input +"<br>");
// document.write("last charcter of input: "+ input[index])





// task 18
// var text = "The quick brown fox jumps over the lazy dog";
// var newtext = text.toLowerCase();
// var count = 0;
// for (var i = 0; i<newtext.length; i++){
//     if (newtext.slice(i, i+3) === "the"){
//         count++;
//     }
// }
// document.write("text: "+ text + "<br>")
// document.write("There are "+count +" occurrence(s) of the word 'the'")























// ===== chapter 26-30

// task 1;
// var num = +prompt("Enter a positive integer");
// document.write("Number: "+ num +"<br>");
// document.write("Round off value: "+ Math.round(num) +"<br>");
// document.write("Floor value: "+ Math.floor(num) +"<br>");
// document.write("Ceil value: "+ Math.ceil(num) +"<br>");






// task 2;
// var num = +prompt("Enter a negative floating point number");
// document.write("Number: "+ num +"<br>");
// document.write("Round off value: "+ Math.round(num) +"<br>");
// document.write("Floor value: "+ Math.floor(num) +"<br>");
// document.write("Ceil value: "+ Math.ceil(num) +"<br>");





// task 3;
// var num = +prompt("Enter a number")
// document.write("The orignal value: "+num+"<br>");
// num = Math.abs(num);
// document.write("The absolute value is: "+num)





// task 4;
// var num = Math.random();
// var dice = num*6+1;
// dice = Math.floor(dice);
// document.write("Random dice value: "+ dice);





// task 5;
// var num = Math.random();
// var coin = num*2+1;
// coin = Math.floor(coin);
// document.write(coin+"<br>");
// if (coin === 1){
//     document.write("Randon coin value: Heads");
// }
// else if (coin === 2){
//     document.write("Random coin value: Tails")
// }






// task 6;
// var num = Math.random();
// var randNum = num*100+1;
// randNum = Math.floor(randNum);
// document.write("Random number between 1 & 100: "+ randNum);






// task 7;
// var wght = prompt("Enter your weight");

// for (var i=0; i<wght.length; i++){
//     if (wght.slice(i) === "kgs"){
//         var kgs = wght.slice(i);
//         var wgt = wght.slice(0,i-1)
//         break;
//     }
//     else if (wght.slice(i) === "kilograms"){
//         var kgs = wght.slice(i);
//         var wgt = wght.slice(0,i-1)
//         break;
//     }
// }
// wgt = Number(wgt);
// wgt = wgt.toFixed(1);
// document.write("The weight of user is "+wgt+" kilograms")






// task 8;
// var user = +prompt("Enter a number between 1 and 10")
// var num = Math.random();
// var randomNum = num*10+1;
// randomNum = Math.floor(randomNum);
// if (user === randomNum){
//     document.write("Congrates");
// }
// else if (user !== randomNum){
//     document.write("try again!")
// }
























//======= Chapter 31-34

// task 1
// var date = new Date();
// document.write(date);





// task 2
// var date = new Date();
// var mon = date.getMonth();
// var month = ["January", "February", "March","April","May", "June","July","August","September", "Octuber","November","December"]
// alert("Current MOnth: "+ month[mon])





// task 3
// var date = new Date();
// date = date.toString();
// var day = date.slice(0,3)
// alert("Taday is: "+day)






// task 4;
// var date = new Date();
// date = date.toString();
// var day = date.slice(0,3);
// if (day === "Sun" || day ==="Sat"){
//     document.write("It's fun day")
// }
// console.log(day)






// task 5;
// var date = new Date();
// var toDate = date.getDate();
// if (toDate <= 15){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }






// task 6;
// var date = new Date();
// var timeMili = date.getTime();
// document.write("Current Date: "+date+ "<br>");
// document.write("Elapsed miliseconds since Juanuary 1, 1970: "+ timeMili +"<br>")
// document.write("Elapsed minutes since Juanuary 1, 1970: "+ timeMili/(1000*60) +"<br>")







//task 7;
// var date = new Date();
// var hours = date.getHours();
// if (hours <12 ){
//     document.write("It's AM")
// }
// else {
//     document.write("It's PM")
// }






// task 8;
// var laterDate = new Date("December 31, 2020");
// document.write(laterDate)





// task 9;
// var firstRamdan = new Date("June 18, 2015");
// var date = new Date();
// var miliRamdan = firstRamdan.getTime();
// var datemili = date.getTime();
// var remaining = datemili - miliRamdan;
// document.write(Math.floor(remaining/(1000*60*60*24))+" days have passed since 1st Ramdan, 2015")






// task 10;
// var toDate = new Date();
// var toDateMili = toDate.getTime();
// var bigning15 = new Date("January 1, 2015");
// var bigning15Mili = bigning15.getTime();
// var diffMili = toDateMili - bigning15Mili;
// document.write("On reference date "+toDate +", "+ Math.floor( diffMili/(1000))+" Seconds has passed since beginning of 2015")






// task 11;
// var date = new Date();
// document.write("Current Date: "+date +"<br>");
// var hours = date.getHours()
// date.setHours(hours-1)
// document.write("1 hour ago, it was "+date)






// task 12;
// var date = new Date();
// document.write("Current Date: "+date +"<br>");
// var year = date.getFullYear();
// date.setFullYear(year-100);
// document.write("100 years back, it was "+date)






// task 13;
// var age = +prompt("Enter your age");
// var date = new Date();
// var year = date.getFullYear();
// var birthYear = year - age;
// document.write("Your age is: "+age+"<br>");
// document.write("your birth year is: "+birthYear)






// task 14;
// var name = prompt("Enter Customer Name");
// var month = prompt("Enter month");
// var units = +prompt("Enter no. of units")
// var unitPrice = +prompt("Enter Charges per Unit");
// var payableWithInDueDate = unitPrice*units;
// var latePaymentSurcharge = 350;
// var payableAfterDueDate = payableWithInDueDate + latePaymentSurcharge;

// document.write(" <h1> K-Electric Bill </h1> "+"<br>");

// document.write("Customer Name: <b>"+ name +"</b> <br>");
// document.write("Month: <b>"+ month +"</b> <br>");
// document.write("Numbers of Units: <b>"+ units +"</b> <br>");
// document.write("Charges per Units: <b>"+ unitPrice +"</b> <br>"+"<br>");
// document.write("Net amount payable (within due date): <b>"+ payableWithInDueDate +"</b> <br>");
// document.write("Late payment Surcharge <b>"+ latePaymentSurcharge +"</b> <br>");
// document.write("Gross amout payable (After due date): <b>"+ payableAfterDueDate +"</b> <br>");

























// ====== chapter 35-38 ===========

// task 1; 
// function currentDate(){
//     document.write(new Date());
// }
// currentDate();






// task 2;
// function greet(first, last){
//     document.write("Hi "+first+" "+last+" greetings!");
// }
// greet("Mussadiq","Ali");






// task 3;
// function add(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter 2nd number");
//     return num1 + num2;
// }
// var sum = add();
// document.write(sum);







// task 4;
// function calculator(val1, operatr, val2){
//     if (operatr === "+"){
//         return val1+val2;
//     }
//     else if (operatr === "-"){
//         return val1-val2;
//     }
//     else if (operatr === "*"){
//         return val1*val2;
//     }
//     else if (operatr === "/"){
//         return val1/val2;
//     }
//     else{
//         return "wrong inpur";
//     }
// }
// var val1=+prompt("Enter 1st value")
// var operatr=prompt("Enter operator")
// var val2=+prompt("Enter 2nd value")
// var result = calculator(val1, operatr, val2)

// document.write(val1+operatr+val2+"<br>")
// document.write(result)







// task 5;
// function sqr(num){
//     document.write("The square of argument is: "+ num*num);
// }
// sqr(+prompt("Enter a number to calculate square"));






// task 6;
// function factorial(num){
//     if (num === 0){
//         return 1;
//     }
//     return num*factorial(num-1)
// }
// var ans = factorial(5);
// document.write(ans)






// task 7; 
// function counting(start, end){
//     for (var i= start; i<=end; i++){
//         document.write(i+", ")
//     }
// }
// var start = +prompt("Enter starting value");
// var end = +prompt("Enter ending value");
// counting(start, end)







// task 8;
// function hyp (base, perp){
//     function sqr(x){
//         return x*x;
//     }
//     return Math.sqrt(sqr(base) + sqr(perp));
// }
// var base = +prompt("Enter base");
// var perp = +prompt("Enter perpendicular");
// document.write("The hypotenous is: "+hyp(base,perp))






// task 9;
// function area(w, h){
//     return w*h;
// }
// var height = 5;
// document.write("Area of rectangle: "+ area(2, height));






// task 10;
// function wordCheck(word){
//     var check="";
//     for (var i=word.length-1; i>=0; i--){
//         check = check+word[i];
//     }
//     if (check === word){
//         document.write(word + " is a palindrome word")
//     }
//     else{
//         document.write(word + " is not a palindrome word")
//     }
// }
// var w = prompt("Enter the word to check");
// w = w.toLowerCase();
// wordCheck(w);






// task 11
// function capitilize(str){
//     str = str.split(" ");
//     for (var i = 0; i < str.length; i++){
//         var first = str[i].slice(0,1);
//         var scnd = str[i].slice(1);
//         first = first.toUpperCase();
//         scnd = scnd.toLowerCase();
//         str[i] = first+scnd;
//         }
//         str = str.join(" ");
//         document.write("Capitilize output: "+str)
//     }
// var text = "the quick brown fox";
// capitilize(text)








// task 12;
// function checkStr(str){
//     str = str.split(" ");
//     var max = str[0];
//     for (var i = 0; i < str.length; i++){
//         if (str[i].length > max.length){
//             max = str[i];
//         }
//     }
//     document.write("Longest word within the string: "+max)
// }
// var text = "Web Development Tutorial";
// checkStr(text)








// task 13;
// function countLatters(str, ltr){
//     var count = 0;
//     for(var i=0; i< str.length; i++){
//         if (str[i]===ltr){
//             count +=1;
//         }
//     }
//     console.log(count)
// }
// countLatters('JSResourceS.com', 'o')







//task 14;
// function calcCircumference(rad){
//     circum = 2*3.14*rad;
//     circum = circum.toFixed(2)
//     document.write("The circumference is: "+ circum +"<br>");
// }
// function calcArea(rad) {
//     area = 3.14*rad*rad
//     area = area.toFixed(2)
//     document.write("The area is: "+ area +"<br>");
// }
// var radius = "6";
// calcArea(radius);
// calcCircumference(radius);

