// ===== chapter 38 to 42 ==========

// =========== task no. 1=========

// function power(a,b){
//     if (b === 0 && a > 0){
//         return 1;
//     }
//     else if (b === 0 && a < 0){
//         return -1;
//     }
//     else if (b === 0 && a === 0){
//         return "error";
//     }
//     else if (b > 0 && a > 0) {
//         if (b === 1){
//             return a;
//         }
//         else {
//             var num = a;
//             for (var i = 2; i <= b; i++){
//             num = num*a;
//             }
//             return num;
//         }
//     }   
// }
// var num1 = +prompt("enter a num");
// var num2 = +prompt("Enter power of num");
// document.write("The answer is: "+power(num1, num2))







// ======= task 2 ===========
// function leapCheck(year){
//     if (year%4 === 0){
//         return "you enter a leap year";
//     }
//     else{
//         return "It's not a leap year";
//     }
// }
// var yr = +prompt("Enter a year")
// document.write(leapCheck(yr))







//========== task 3 ===========
// function tryArea(a,b,c){
//     var s = (a+b+c)/2;
//     var area = s*(s-a)*(s-b)*(s-c);
//     area = Math.sqrt(area)
//     return area;
// }
// document.write("The are of tryangle is: "+ tryArea(12,15,17));








// ============== task 4 =============
// function CalPercentage(a,b,c,t){
//     var sum = a+b+c;
//     return (sum/t)*100;
// }
// function CalcAvg(a,b,c){
//     return (a+b+c)/3;
// }
// function main(){
//     var mark1 = +prompt("Enter marks of first subject");
//     var mark2 = +prompt("Enter marks of second subject");
//     var mark3 = +prompt("Enter marks of third subject");
//     var totalMarks = 300;
//     var avg = CalcAvg(mark1,mark2,mark3);
//     var percentage = CalPercentage(mark1, mark2, mark3, totalMarks);
//     document.write("The average of student's marks: "+avg +"<br>");
//     document.write("The percentage of student's marks "+percentage+"%")
// }
// main();






//========= task 5 ==============
// function checkIndex(word, check){
//     for (var i=0; i<word.length; i++){
//         if(word[i] === check){
//             return i;
//         }
//     }
// }
// var word = ["a", "b", "pakistan","china"]
// var index = checkIndex(word,"pakistan")
// document.write("the index is; "+ index)







// ==========task 6 ===============

// function delVowel(sentence){
//     sentence = sentence.split("")
//     for (var i=0; i<sentence.length; i++){
//         if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u" || sentence[i] === "A" || sentence[i] === "E" || sentence[i] === "I" || sentence[i] === "O" || sentence[i] === "U"){
//             sentence.splice(i,1,)
//         }
//     }
//     sentence = sentence.join("")
//     return sentence;
// }
// var sen = "it's a sentence to del all vowels from it";
// document.write("Before Delete Vovels: <b>"+sen+"</b><br>");
// document.write("<br>After Delete Vovels: <b>"+delVowel(sen)+"</b>");








// ========== task 7 =============

// function checkVowel(sentence){
//     sentence = sentence.toLowerCase();
//     var count = 0;
//     for (var i = 0; i<sentence.length; i++){
//         switch(sentence.slice(i,i+1)){
//             case "a" :
//                 switch(sentence.slice(i+1,i+2)){
//                     case "a" :
//                         count++;
//                         break;
//                     case "e" :
//                         count++;
//                         break;
//                     case "i" :
//                         count++;
//                         break;
//                     case "o" :
//                         count++;
//                         break;
//                     case "u" :
//                         count++;
//                         break; 
//                 }
//                 break;
//             case "e" :
//                 switch(sentence.slice(i+1,i+2)){
//                     case "a" :
//                         count++;
//                         break;
//                     case "e" :
//                         count++;
//                         break;
//                     case "i" :
//                         count++;
//                         break;
//                     case "o" :
//                         count++;
//                         break;
//                     case "u" :
//                         count++;
//                         break; 
//                 }
//                 break;
//             case "i" :
//                 switch(sentence.slice(i+1,i+2)){
//                     case "a" :
//                         count++;
//                         break;
//                     case "e" :
//                         count++;
//                         break;
//                     case "i" :
//                         count++;
//                         break;
//                     case "o" :
//                         count++;
//                         break;
//                     case "u" :
//                         count++;
//                         break; 
//                 }
//                 break;
//             case "o" :
//                 switch(sentence.slice(i+1,i+2)){
//                     case "a" :
//                         count++;
//                         break;
//                     case "e" :
//                         count++;
//                         break;
//                     case "i" :
//                         count++;
//                         break;
//                     case "o" :
//                         count++;
//                         break;
//                     case "u" :
//                         count++;
//                         break; 
//                 }
//                 break;
//             case "u" :
//                 switch(sentence.slice(i+1,i+2)){
//                     case "a" :
//                         count++;
//                         break;
//                     case "e" :
//                         count++;
//                         break;
//                     case "i" :
//                         count++;
//                         break;
//                     case "o" :
//                         count++;
//                         break;
//                     case "u" :
//                         count++;
//                         break; 
//                 }
//                 break;
//         }
//     }
//     return count;
// }
// var sen = "Pleases read this application and give me gratuity";
// document.write(checkVowel(sen))








// =============== task 8 ================

// function meter(km){
//     var meter = km*1000;
//     document.write("The distence between cities in meters: "+meter +"<br>")
// }
// function feet(km){
//     var feet = km*3280.84;
//     document.write("The distence between cities in feet: "+feet +"<br>")
// }
// function inches(km){
//     var inches = km*39370.1;
//     document.write("The distence between cities in inches: "+inches +"<br>")
// }
// function centimenters(km){
//     var centimenters = km*100000;
//     document.write("The distence between cities in centimenters: "+centimenters +"<br>")
// }
// var kilometer = +prompt("Enter the distence in Kilometers:");
// document.write("The distence between cities in kilometers: "+kilometer +"<br>")
// meter(kilometer);
// feet(kilometer);
// inches(kilometer);
// centimenters(kilometer);







// =========== task 9 =============
// function overTimePay(time){
//     return time*12
// }
// var overHours =+prompt("Enter over time in hours")
// document.write("Over time pay of the employ is Rs. "+overTimePay(overHours))






// ========== task 10 ===========
// function currency(amount){
//     var notes = [10, 50, 100];
//     var n = notes.length;
//     var ans = [0,0,0]
//     var i = n-1;
//     while (i >= 0){
//         while (amount >= notes[i]){
//             amount = amount-notes[i];
//             ans[i]++;
//         }
//         i = i-1; 
//     }
//     document.write("You will have "+ ans[2] +" Hundrad notes "+ ans[1] +" Fifty notes and "+ ans[0] +" Ten notes ")
// }
// var cash = +prompt("Enter amount to withdraw");
// document.write("Total amount: "+cash+"<br>")
// currency(cash);






















// =========== chapter 43-48 ============

// ============ task 1 ===============

// function alrt(){
//     alert("your are learning Events")
// }








// ============= task 2 ===============
// function imgAlert(){
//     alert("Thanks for puchasing a phone from us")
// }









// ================task 3 =================
// function delVal(){
//     var vale = document.getElementById("c01");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c02");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c03");
//     vale.innerHTML = "";
// }
// function delVal1(){
//     var vale = document.getElementById("c11");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c12");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c13");
//     vale.innerHTML = "";
// }
// function delVal2(){
//     var vale = document.getElementById("c21");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c22");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c23");
//     vale.innerHTML = "";
// }
// function delVal3(){
//     var vale = document.getElementById("c31");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c32");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c33");
//     vale.innerHTML = "";
// }
// function delVal4(){
//     var vale = document.getElementById("c41");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c42");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c43");
//     vale.innerHTML = "";
// }
// function delVal5(){
//     var vale = document.getElementById("c51");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c52");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c53");
//     vale.innerHTML = "";
// }
// function delVal6(){
//     var vale = document.getElementById("c61");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c62");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c63");
//     vale.innerHTML = "";
// }
// function delVal7(){
//     var vale = document.getElementById("c71");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c72");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c73");
//     vale.innerHTML = "";
// }
// function delVal8(){
//     var vale = document.getElementById("c81");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c82");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c83");
//     vale.innerHTML = "";
// }
// function delVal9(){
//     var vale = document.getElementById("c91");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c92");
//     vale.innerHTML = "";
//     var vale = document.getElementById("c93");
//     vale.innerHTML = "";
// }











// =============== task 4 ==============
// function picAfter(){
//     var pic = document.getElementById("mouseOverProperty")
//     pic.src = "pics/pic2.webp"
// }

// function picBefore(){
//     var pic = document.getElementById("mouseOverProperty")
//     pic.src = "pics/pic1.webp"
// }









// =========== task 5 =================
// function increase(){
//     var counter = document.getElementById("valu")
//     counter.innerHTML++;
// }
// function decrease(){
//     var counter = document.getElementById("valu")
//     counter.innerHTML--;
// }

























// ========================== chapter 49-52 ======================

// =========== task 1 ==============
// function displayData(Name1, Name2, Email, password1, password2 ){
//     var firstName = document.getElementById(Name1).value
//     var lastName = document.getElementById(Name2).value
//     var mail = document.getElementById(Email).value
//     var p1 = document.getElementById(password1).value
//     var p2 = document.getElementById(password2).value
//     if (p1 !== p2){
//         alert('Password not matches to each other.')
//     }else{
//         document.write("First Name: "+firstName + "<br>")
//         document.write("Last Name: "+lastName + "<br>")
//         document.write("Email: "+mail + "<br>")
//         document.write("First Password: "+p1 + "<br>")
//         document.write("Second Password: "+p2 + "<br>")
//     }
// }
// function ComparePassword(){
//     var pas1 = document.getElementById('password1').value;
//     var pas2 = document.getElementById('password2').value;
//     if (pas1 !== pas2){
//         alert("Password not matches to each other.")
//     }
// }









// ================= task 2 ==================
// function readMore() {
//     var ShortText = document.getElementById("shortPara");
//     var fullText = document.getElementById("hideData");
//     ShortText.innerHTML = fullText.innerHTML;
// }







// =============== task 3 ==================
// function saveRecord(SrNo, StuName, StuClass){
//     var srno = document.getElementById(SrNo)
//     var stuName = document.getElementById(StuName)
//     var stuClass = document.getElementById(StuClass)
//     var rows = document.getElementsByClassName('row')

//     var sno = document.createTextNode(srno.value)
//     rows[srno.value].childNodes[1].appendChild(sno)
//     var name = document.createTextNode(stuName.value)
//     rows[srno.value].childNodes[3].appendChild(name)
//     var cname = document.createTextNode(stuClass.value)
//     rows[srno.value].childNodes[5].appendChild(cname)

//         var form = document.getElementById("form")
//         form.className = "hideData";
//         var table = document.getElementById('table')
//         table.className = 'showData';
// }
// function Showform(val){
//     var form = document.getElementById("form")
//     form.className = "showData";
//     var table = document.getElementById('table')
//     table.className = 'hideData';

//     var srno = document.getElementById("srNo")
//     srno.value = val
//     var stuName = document.getElementById("name")
//     stuName.value = "";
//     var stuClass = document.getElementById("stuClass")
//     stuClass.value = "";
// }
// function deleteRecord(val){
//     var rows = document.getElementsByClassName('row')
//     rows[val].childNodes[1].innerHTML = ""
//     rows[val].childNodes[3].innerHTML = ""
//     rows[val].childNodes[5].innerHTML = ""
// }
























// ===================== chapter 53-57 ========================
// ===============task 1 =============

// function modal(inx){
//     var modal = document.getElementById("myModal");
//     var img = document.getElementsByClassName("myImg")
//     var modalImg = document.getElementById("img01");
//     modal.style.display = "block";
//     modalImg.src = img[inx].src;
// }
// function spann(){
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }








// ============== task 2 ============= 
// function zoomIn(){
//     var text = document.getElementById("contnt")
//     var st = window.getComputedStyle(text)
//     var font = st.fontSize
//     var val = Number(font.slice(0,font.length-2))
//     var incement = 10
//     val = eval(val+ incement)
//     val = val+font.slice(font.length-2,)
//     text.style.fontSize = val
// }
// function zoomOut(){
//     var text = document.getElementById("contnt")
//     var st = window.getComputedStyle(text)
//     var font = st.fontSize
//     var val = Number(font.slice(0,font.length-2))
//     var decrement = 10
//     val = eval(val - decrement)
//     val = val+font.slice(font.length-2,)
//     text.style.fontSize = val
// }

























// ============================ chapter 58-67 =========================
// ================= task 1 =============
// ============ (i) ===========
// var mainContent = document.getElementById("main-content");

// // ============ (ii) ===========
// var childOfMain = mainContent.childNodes;
// for (var i = 0; i<childOfMain.length; i++){
//     console.log(childOfMain[i])
// }

// // ============ (iii) =============
// var renderElement = document.getElementsByClassName("render");
// for (var i=0; i<renderElement.length; i++){
//     document.write(renderElement[i].innerHTML +"<br>");
// }


// // ============ (iv) ==============
// var FirstName = document.getElementById("first-name");
// var nameValue = "Mussadiq";
// FirstName.value = nameValue;

// // =========== (v) ===========
// var lastName = document.getElementById("last-name");
// var Email = document.getElementById("email");
// lastName.value = "Ali";
// Email.value = "mussadiqali@gmail.com";









// ================= task 2 ==============
// var form_content = document.getElementById("form-content");
// if (form_content.nodeType ===  1){
//     document.write("The node is Element")
// }
// else if (form_content.nodeType === 3){
//     document.write("The node is Text")
// }



// ======== (ii) =============
// var lastN = document.getElementById("last-name");
// if (lastN.nodeType ===  1){
//     document.write("<br><br>"+"The node Type of Last Name is <b> Element </b>"+"<br><br>")
// }
// else if (lastN.nodeType === 3){
//     document.write("<br><br>"+"The node Type of Last Name is <b> Text </b>"+"<br><br>")
// }
// console.log(lastN.childNodes)



// ===========(iii)=========
// var textNode = document.createTextNode("li")
// lastN.childNodes.value = textNode
// console.log(lastN.childNodes)



// ========== (iv) ==========
// var m_contnt = document.getElementById("main-content");
// var child1 = m_contnt.firstChild;
// var childLast = m_contnt.lastChild;
// console.log(child1)
// console.log(childLast)


// ============(v)=========
// var aNode = document.getElementById("last-name");
// var nextSib = aNode.nextSibling;
// var pervSib = aNode.previousSibling;
// console.log(nextSib);
// console.log(pervSib);


// ======== (vi) ========
// var mail = document.getElementById("email")
// var parent = mail.parentNode;
// console.log(parent);

// if (parent.nodeType ===  1){
//     console.log("The node is Element")
// }
// else if (parent.nodeType === 3){
//     console.log("The node is Text")
// }





