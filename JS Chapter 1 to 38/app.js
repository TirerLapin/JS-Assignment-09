/* -------------Chapter no 1--------------- */

//Quesion no 1
alert('Assalam o Alaikum\nWelcome to my website!');

//Question no 2
alert('Error! Please enter a Valid password.');

//Question no 3
alert('Welcome to JS Land\nHappy Coding!');

//Question no 4
alert('Welcome to JS Land');
alert('prevent this page from creating additional dialogs');

//Question no 5
window.alert("Hello... I can run JS through my web browser's console");

/* --------------Chapter no 2----------------- */

//Quesion no 1
var username;

//Quesion no 2
var myName = "Daniyal Kaleem";

//Quesion no 3
var message;
message = "Hello World";
alert(message);

//Quesion no 4
var name = "Daniyal Kaleem";
var age = 20;
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

//Question no 5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//Question no 6
var email="daniyalkaleem99@hotmail.com";
alert("My Email Address is ".concat(email));

//Question no 7
var book = "A smarter way to learn JavaScript";
alert("I Am trying to learn from the Book ".concat(book));

//Question no 8
document.write("Yah! I can write HTML content through Javascript");

//Question no 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);

/* --------------Chapter no 3----------------- */

//Question no 1
var age = 21;
alert("I am ".concat(age, " years old"));

//Question no 2
var visit = 15;
alert("You have visited this site".concat(visit, " times"));

//Quesstion no 3
var birthYear = 1999;
document.write("My Birth Year is ".concat(birthYear));
document.write("<br />DataType of my decleared variable is number");

//Question no 4
var visitorName = prompt("What is Your Name:");
var productTitle = prompt("Which type of cloth do you want?");
var quantity = prompt("how many ".concat(productTitle, " do you want"));
document.write("<br />"+visitorName+" Ordered ".concat(quantity, " ", productTitle, " (s) on XYZ Clothing Store"));

/* ----------------Chapter no 4------------------ */

//Question no 1
var name, age, DOB;

//Question no 2
var firstName, lastName, course, university, semester;
//var 12add, #sub , &div , #$mul , 1212mode;

//Question no 3
//a)
document.write("<h1>Rules for naming JS variables</h1><br /><br />");
//b)
document.write("Variable names can only contain, number, $ and _. For example $my_1stVariable");
//c)
document.write("<br />Variables must begin with a letter, $ or _. For example $name, _name or name");
//d)
document.write("<br />Variable names are case sensitive");
//e)
document.write("<br />Variable names should not be JS keywords");

/* ---------------------Chapter no 5-------------------- */

//Question no 1
var x = 3;
var y = 5;
document.write("Sum of ".concat(x, " + ", y, " is ", x+y));

//Question no 2
document.write("<br /><br />Subs of ".concat(x, " - ", y, " is ", x-y));
document.write("<br />Multiplication of ".concat(x, " x ", y, " is ", x*y));
document.write("<br />Division of ".concat(x, " / ", y, " is ", x/y));
document.write("<br />Modulus of ".concat(x, " % ", y, " is ", x%y));

//Question no 3
var num;
document.write("<br /><br />Value after decleared variable is undefined");
num = 5;
document.write("<br />Initial value: ".concat(num));
num = num + 1;
document.write("<br />Value after increament is: ".concat(num));
num = num + 7;
document.write("<br />Value after addition is: ".concat(num));
num = num - 1;
document.write("<br />Value after decreament is: ".concat(num));
num = num%3;
document.write("<br />The remainder is:".concat(num));

//Question no 4
var ticketPrice = 600;
document.write("<br /><br />Total Cost to buy 5 tickets to a movie is ".concat(ticketPrice*5, "PKR"));

//Question no 5
var table = 4;
document.write("<br /><br />Table of ".concat(table, "<br />"));
for (var i=1; i<11; i++){
    document.write(table+" ".concat("x ", i, " =", table*i, "<br />"));
}

//Question no 6
var celcius = 25;
var fahrenhiet = 70;

var c = (fahrenhiet - 32) * (5/9);
var f = (celcius * (9/5)) + 32;
document.write("<br />");
document.write(celcius+"<sup>o</sup>C is ".concat(f, "<sup>o</sup>F"));
document.write("<br />"+fahrenhiet+"<sup>o</sup>F is ".concat(c, "<sup>o</sup>C"));

//Question no 7
var priceOne = 650;
var priceTwo = 100;
var orderedQuantityOfOne = 3;
var orderedQuantityOfTwo = 7;
document.write("<br /><br />Price of item 1 is ".concat(priceOne));
document.write("<br />Quantity of item 1 is ".concat(orderedQuantityOfOne));
document.write("<br />Price of item 2 is ".concat(priceTwo));
document.write("<br />Quantity of item 2 is ".concat(orderedQuantityOfTwo));
document.write("<br /><br />Total cost of your order is ".concat((priceOne*orderedQuantityOfOne) + (priceTwo*orderedQuantityOfTwo)));

//Question no 8
var totalMarks = 980;
var obtainedMarks = 804;
document.write("<br /><br />Total Marks: ".concat(totalMarks));
document.write("<br />Obtained Marks: ".concat(obtainedMarks));
document.write("<br />Percentage: ".concat((obtainedMarks/totalMarks) * 100), "%");

//Question no 9
var dollar = 10;
var riyal = 25;
//dollar & Riyal rate at 3/6/2020
document.write("<br /><h1>Currency in PKR</h1>")
document.write("<br /><br />Total Currency in PKR: ".concat((dollar*164.75)+(riyal*43.88)));

//Question no 10
var number = 9;
document.write("<br /><br />Final Answer is ".concat(((number+5)*10)/2));

//Question no 11
var currentYear = 2020;
var birthYear = 1999;
var yourAge = currentYear - birthYear;
document.write("<br /><h1>Age Calculator</h1>");
document.write("<br /><br />Current Year: ".concat(currentYear));
document.write("<br />Birth Year: ".concat(birthYear));
document.write("<br />They are either ".concat(yourAge - 1, " or ", yourAge, " year old"));
document.write("<br />Your Age is: ".concat(yourAge));

//Question no 12
var radius = 20;
var cirOfCircle = 2 * Math.PI * radius;
var areaOfCircle = Math.PI * Math.pow(radius, 2);
document.write("<br/><h1>The Geometrizer</h1>");
document.write("<br /><br />Radius of a Circle: ".concat(radius));
document.write("<br />Circumference is: ".concat(cirOfCircle));
document.write("<br />The area is: ".concat(areaOfCircle));

//Question no 13
var favSnack = "Lays";
var currAge = 21;
var maxAge = 60;
var estAmmount = 5;
var totalForLife = (maxAge - currAge) * 2;
document.write("<br /><br />Favorite Snack: ".concat(favSnack));
document.write("<br />Current Age: ".concat(currAge));
document.write("<br />Estimated Maximum Age: ".concat(maxAge));
document.write("<br />Amount of snack per day: ".concat(estAmmount));
document.write("<br />you will need ".concat(totalForLife, " ", favSnack, " to last you until the ripe old age of ", maxAge));

/* --------------------Chapter no 6-9------------------------ */

//Question no 1
var a=10;
document.write("Result");
document.write("<br />The value of a is: ".concat(a));
document.write("<br />....................................<br />");
document.write("<br />The value of ++a is: ".concat(++a));
document.write("<br />Now the value of a is: ".concat(a));
document.write("<br /><br />The value of a++ is: ".concat(a++));
document.write("<br />Now the value of a is: ".concat(a));
document.write("<br /><br />The value of --a is: ".concat(--a));
document.write("<br />Now the value of a is: ".concat(a));
document.write("<br /><br />The value of a-- is: ".concat(a--));
document.write("<br />The value of a is: ".concat(a));

//Question no 2
var a=2, b=1;
document.write("<br /><br />--a = ".concat(--a));
document.write("<br />--a - --b = ".concat((--a)-(--b)));
document.write("<br />--a - --b + ++b = ".concat((--a)-(--b)+(++b)));
document.write("<br />--a - --b + ++b + b-- = ".concat((--a)-(--b)+(++b)+(b--)));
document.write("<br />a is = ".concat(a));
document.write("<br />b is = ".concat(b));
var result=(--a)-(--b)+(++b)+(b--);
document.write("<br />result is = ".concat(result));

//Question no 3
var uname = prompt("what is your name:");
document.write("<br /><br />Assalam-u-Alaikum, ".concat(uname));

//Question no 4
document.write("<br /><br />");
var numForTable = prompt("Enter any number to generate its Table:");
if (numForTable === "") {
    for (var i=1; i<11; i++) {
        document.write("5 x ".concat(i, " = ", 5*i, "<br />"));
    }
}
else {
    for (var j=1; j<11; j++) {
        document.write(numForTable+" x ".concat(j, " = ", numForTable*j, "<br />"));
    }
}

//Question no 5
var subjectOne = prompt("First Subject Name"), subjectTwo = prompt("Second Subject Name"), subjectThree = prompt("Third Subject Name");
var totalMarksForEachSub = 100;
var ObtMarksSubOne = prompt("Obtained Marks For Subject One"), ObtMarksSubTwo = prompt("Obtained Marks For Subject Two");
var ObtMarksSubThree = prompt("Obtained Marks For Subject Three");
document.write("<br /><br />");
document.write("<b>Subjects</b> <b>Total Marks</b> <b>Obtained Marks</b> <b>Percentage</b>");
document.write("<br />".concat(subjectOne, " ", totalMarksForEachSub, " ", ObtMarksSubOne, " ", (ObtMarksSubOne/totalMarksForEachSub)*100));
document.write("<br />".concat(subjectTwo, " ", totalMarksForEachSub, " ", ObtMarksSubTwo, " ", (ObtMarksSubTwo/totalMarksForEachSub)*100));
document.write("<br />".concat(subjectThree, " ", totalMarksForEachSub, " ", ObtMarksSubThree, " ", (ObtMarksSubThree/totalMarksForEachSub)*100));

/* -------------------------Chapter no 9-11---------------------- */

//Question no 1
var city = prompt("Enter city name:");
if (city === "karachi" || city === "Karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("Not Karachi..!");
}

//Question no 2
var gender = prompt("Enter Your Gender:");
if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir");
}
else if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma’am");
}
else {
    alert("Please! Enter Male or Female...!");
}

//Question no 3
var signal = prompt("Selecet a Traffic Signal :");
if(signal === "red" || signal === "Red") {
    alert("Vehicles Must Stop");
}
else if(signal === "yellow" || signal === "Yellow") {
    alert("Vehicles should get ready to move");
}
else if(signal ==="green" || signal==="Green") {
    alert("Vehicles can move now");
}
else {
    alert("Wrong Signal !! ");
}

//Question no 4
var fuel = prompt("Input remaining fuel in car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("Fuel is OK!");
}

//Question no 5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//Question no 6
var sub1 = prompt("Enter Marks of subject 1 : ");
var sub2 = prompt("Enter Marks of Subject 2 : ");
var sub3 = prompt("Enter Marks of Subject 3 : ");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);
sub3 = parseInt(sub3);
var tmarks=(sub1 + sub2 + sub3 );
var per = (tmarks/300)* 100;
document.write("<h1>Marks Sheet</h1>")
if(per >= 80) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is A-one <br/>Remarks : Excelent");
}
else if(per >= 70) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is A <br/>Remarks : Good");
}
else if(per >= 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is B <br/>Remarks : You need to improve");
}
else if(per < 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is Fail <br/>Remarks : Sorry");
}

//Question no 7
alert("Guess Game :");
var n = prompt("Select a number from a range of 1 to 10 ");
if(n === 4) {
    alert("Bingo! Correct");
}
else if (n>4) {
    n--;
    alert("Close Enough to correct answer, Your answer is Greater");
    } 
else if(n<4) {
    n++;
    alert("Close Enough to correct answer, Your Answer is Lesser");
}

//Question no 8
var divByThree = prompt("Enter the number");
if (divByThree % 3 === 0) {
    alert("Number is Divisible by 3");
}
else {
    alert("Number is not Divisible by 3");
}

//Question no 9
var oddEven = prompt("Enter the Number");
if (oddEven % 2 === 0) {
    alert("Number is Even");
}
else {
    alert("Number is Odd");
}

//Question no 10
alert("Weather Report");
var temp = prompt("Enter Temperature :");
if(temp > 40) {
    document.write("It is too hot outside");
}
else if(temp >30) {
    document.write("<br/>The Weather today is normal");
}
else if(temp>20) {
    document.write("<br/>Today's Weather is Cool");
}
else if(temp > 10) {
    document.write("<br/>OMG!! Today's Weather is so cool");
}

//Question no 11
alert("Calculator");
var number1 = prompt("Enter Number 1 :");
var number2 = prompt("Enter Number 2 :");
var opr = prompt("Enter Operator : <br/>+ for Addition<br/>- for Subtraction<br/>* for Multiplication<br/>/ for Division");
number1 = parseInt(number1);
number2 = parseInt(number2);
if (opr == "+") {
    alert("Addition is "+(number1+number2));
}
else if(opr == "-") {
    alert("Subtraction is "+(number1-number2));
}
else if(opr =="*") {
    alert("Multiplication is "+(number1*number2));
}
else if(opr =="/") {
    alert("Division is "+(number1/number2));
}

/* --------------------Chapter no 12-13---------------------- */

//Question no 1
var char = prompt("Enter only single character :");
if(char >= 'A' && char <='Z') {
        alert("Capital letter ");
}
else if(char >='a' && char <= 'z') {
    alert("small letter");
}
else  {
    alert("Number");
}

//Question no 2
var num1 = prompt("Enter Number 1 :");
var num2 = prompt("Enter Number 2 :");
if(num1 > num2) {
    alert(num1+" is Greater ");
}
else if(num2 > num1) {
            alert(num2+" is Greater ");
}
else if(num1 === num2) {
    alert("Both "+num1+" and "+num2+" is Equal");
}

//Question no 3
var numb3 = prompt("Enter a number");
if(numb3 === 0) {
    alert("Zero");
}
else if(numb3 > 0) {
    alert("It is a positive number");
}
else {
    alert("It is a negative number");
}

//Question no 4
var ch = prompt("Enter a character to check it's vowel or consonent :");
if((ch == 'a' || ch =='e' || ch == 'i' || ch=='o' || ch == 'u') ||( ch == 'A' || ch =='E' || ch == 'I' || ch=='O' || ch == 'U')) {
    alert("true, Character is Vowel");
}
else {
    alert("false, Character is not Vowel");  
}

//Question no 5
var corrPassword = "daniyal1999@#";
var userPassword = prompt("Enter Your Password");
if(userPassword == "") {
    alert("Please Enter Your Password");
}
else if(userPassword === corrPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password")
}

//Question no 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}

//Question no 7
var userTime = prompt("Enter a time in 24 hour clock format. Like: 1900 = 7pm");

if(userTime >= 0000 && userTime < 1200) {
    alert("Good Mornig!");
}
else if(userTime >= 1200 && userTime < 1700) {
    alert("Good Afternoon!");
}
else if(userTime >= 1700 && userTime < 2100) {
    alert("Good Evening!");
}
else if(userTime >= 2100 && userTime <= 2359) {
    alert("Good Night!");
}
else {
    alert("Enter a valid time.");
}

/* -----------------------Chapter no 14-16------------------------- */

//Question no 1
var stdInfo = [];

//Question no 2
var studInfo = new Array();

//Question no 3
var name = ["Daniyal Kaleem", "Abdul Kaleem", "Hashir Hussain"];

//Question no 4
var ages = [21, 52, 12];

//Question no 5
var booleanArray = [true, false];

//Question no 6
var mixedArray = ["Daniyal Kaleem", 20, true];

//Question no 7
var quaInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications:<br />");
for (var i=0; i<quaInPak.length; i++) {
    document.write((i+1)+") ".concat(quaInPak[i], "<br />"));
}

//Question no 8
var stdName = ["Daniyal Kaleem", "Abdul Kaleem", "Hashir Hussain"];
var stdScore = [230, 480, 320];
var totalMarks = 500;
document.write("<br /><br />");
for (var i=0;i<stdName.length;i++) {
    document.write("Score of ".concat(stdName[i]," is ", stdScore[i], ". Percentage: ", (stdScore[i]/500)*100, "%<br />"));
}

//Question no 9
var colors =[];
colors = ["red","green","blue","yellow"];
// a
var a = prompt("What color do you want to enter in the begining : ");        
document.writeln("<br /><br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+"<br />");
colors.unshift(a);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]);
// b
var b = prompt("What color do you want to enter in the end : ");
document.writeln("<br /><br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+"<br />");
colors.push(b);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]);
// c
colors.unshift("purple");
colors.unshift("pink");
document.writeln("<br/> <br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]+","+colors[5]+","+colors[6   ]);
//d
colors.shift();
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
//e
colors.pop();
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
var ask1 = prompt("At which index you want to Add new Color :");
var askcolor = prompt("what color you want to Add :");    
colors.splice(ask1,1,askcolor);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
//f
var ask2 = prompt("To Index :");
var ask3 = prompt("From Index :");    
//g
colors.splice(ask2,ask3);
for(var i=0;i<colors.length;i++) {
    document.writeln("<br />"+colors[i]+",");
}

//Question no 10
document.write("<br /><br />");
var scoreOfStd = [320, 230, 480, 120];
document.write(scoreOfStd+"<br />");
document.write(scoreOfStd.sort());

//Question no 11
document.write("<br /><br />");
var cities = ["Karachi", "Lahore", "Multan", "Peshawar", "Islamabad"];
var selectedCities = cities.slice(2, 4);
document.write(cities+"<br />");
document.write(selectedCities);

//Question no 12
document.write("<br /><br />");
var arr = ["This", "is", "my", "cat"];
var joinArr = arr.join(" ");
document.write(arr+"<br />");
document.write(joinArr);

//Question no 13
var newArr = [];
newArr.push("Keyboard","Mouse","Printer","Monitor")
document.writeln("<br /><br />Devices :");
for(var i=0;i<newArr.length;i++) {
    document.writeln(newArr[i]+" ");
}
for(var i=0;i<4;i++) {
    document.writeln("<br/>OUT : "+newArr[i]);
}

//Question no 14
var newArr = [];
newArr.push("Keyboard","Mouse","Printer","Monitor")
document.writeln("<br /><br />Devices :");
for(var i=0;i<newArr.length;i++) {
    document.writeln(newArr[i]+" ");
}
for(var i=0;i<4;i++) {
    document.writeln("<br/>OUT : "+newArr.pop());
}

//Question no 15
var up = document.getElementById('geeks'); 
		var down = document.getElementById('gfg'); 
		var select = document.getElementById("arr"); 
		var elmts = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
		up.innerHTML = "Click on the button to " 
					+ "perform the operation"+ 
					".<br>Array - [" + elmts + "]"; 

		// Main function 
		function GFG_Fun() { 
			for (var i = 0; i < elmts.length; i++) { 
				var optn = elmts[i]; 
				var el = document.createElement("option"); 
				el.textContent = optn; 
				el.value = optn; 
				select.appendChild(el); 
			} 
			down.innerHTML = "Elements Added"; 
        }
        
/* -----------------------Chapter no 17-20------------------------ */

//Question no 1
var multiArr = [[]];

//Question no 2
var multiArrTwo = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (var i=0; i<multiArrTwo.length;i++) {
    document.write(multiArrTwo[i]+"<br />");
}

//Question no 3
document.write("<br />");
for (var i=1; i<11; i++) {
    document.write(i+"<br />");
}

//Question no 4
var mulTable = prompt("enter the number to show its multiplication table");
var lenTable = prompt("Enter the length of table");
document.write("<br /><br />Multiplication table of ".concat(mulTable, "<br />Length ", lenTable, "<br />"));
for (var i=1; i<=lenTable; i++) {
    document.write(mulTable+" x ".concat(i, " = ", mulTable*i, "<br />"));
}

//Question no 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<br/><br/>");
for (var i=0;i<fruits.length;i++) {
    document.write(fruits[i]+"<br />")
}
document.write("<br />");
for (var i=0;i<fruits.length;i++) {
    document.write("Element at index".concat(i, " is ", fruits[i], "<br />"));
}

//Question no 6
document.write("<br /><br />");
document.write("<b>counting:</b><br />")
for (var i=1; i<16; i++) {
    document.write(i+",");
}
document.write("<br /><b>Reverse counting:</b><br />");
for (var i=10; i>0; i--) {
    document.write(i+",");
}
document.write("<br /><b>Even:</b><br />");
for (var i=0;i<=20;i=i+2) {
    document.write(i, ",");
}
document.write("<br /><b>Odd:</b><br />");
for (var i=1;i<=20;i=i+2) {
    document.write(i, ",");
}
document.write("<br /><b>Series:</b><br />");
for (var i=2;i<=20;i=i+2) {
    document.write(i, "k ");
}

//Question no 7
document.write("<br/><h1>Searching Example :</h1>")
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter For search :");
for(var i = 0;i<A.length;i++){
    if(search === A[i]) {
        document.write(search," is available at index ",i);
        break;
    }
    else {
        document.write(search," is not available ");
        break;
    }
}

//Question no 8
document.write("<br />");
var ArrayLarge = [24, 53, 78, 91, 12]
var largestNumber = 0;
for(var i=0;i<ArrayLarge.length;i++) {
    if(largestNumber <= ArrayLarge[i])
        largestNumber = ArrayLarge[i];
}
document.write("<br/><br/> List Item in Array : ".concat(ArrayLarge));
document.write("<br/>Largest Number is :",largestNumber);

//Question no 9
document.write("<br />");
var Arraysmall = [24, 53, 78, 91, 12];
var smallestNumber = Arraysmall[0];
for(var i=0; i<Arraysmall.length; i++) {
    if(Arraysmall[i] < smallestNumebr)
        smallestNumber = Arraysmall[i];
}
document.write("<br/>List Item in Array : ".concat(Arraysmall));
document.write("<br/>Smallest Number is :",smallestNumber);

//Question no 10
document.write("<br />");
for (var j=5; j<101; j=j+5) {
    document.write(j+",")
}


// Chapter no 21-25

// Question no 1

var firstName = prompt("Enter Your First Name:");
var lastName = prompt("Enter Your Last Name:");
document.write("Assalam o Alaikum, Have a nice day "+firstName +" "+ lastName);

// Question no 2

document.write("<br /><br />");
var fMob = prompt("Enter the name of your Favorite Mobile Model:");
document.write("My Favorite phone is ".concat(fMob));
document.write("<br />Length of String: ".concat(fMob.length));

// Question no 3

document.write("<br /><br />");
var nationality = "Pakistani";
document.write("String: ".concat(nationality), "<br />");
for (var i=0; i<nationality.length; i++) {
    if (nationality[i] === 'n') {
        document.write("Index of 'n': ".concat(i));
        break;
    }
}

// Question no 4

document.write("<br /><br />");
var greetWorld = "Hello World";
document.write("String: ".concat(greetWorld), "<br />");
document.write("Last Index of 'l': ".concat(greetWorld.indexOf('l', 4)));

// Question no 5

document.write("<br /><br />");
var nationality = "Pakistani";
document.write("String: ".concat(nationality), "<br />");
for (var i=0; i<nationality.length; i++) {
    if (nationality[i] === 'i') {
        document.write("Character At Index 3: ".concat(nationality[i]));
        break;
    }
}

// Question no 6
document.write("<br /><br />");
var firstName = prompt("Enter Your First Name:");
var lastName = prompt("Enter Your Last Name:");
document.write("Assalam o Alaikum, Have a nice day ".concat(firstName, " ", lastName));

// Question no 7
document.write("<br /><br />");
var city = "Hyderabad";
document.write("City: ".concat(city), "<br />");
document.write("After Replacement: Islam".concat(city.slice(5)));

// Question no 8
document.write("<br /><br />");
var message = " Me and my brother loves to play online and multiplayer games.";
document.write("Message Before Filter: ".concat(message), "<br />");
document.write("Message After Filter: ".concat(message.replace(/and/, "&")));

// Question no 9
document.write("<br /><br />");
var stringNum = "472";
document.write("Value: ".concat(stringNum, "<br />"));
document.write("Type: ".concat(typeof(stringNum), "<br />"));
document.write("Value: ".concat(parseInt(stringNum), "<br />"));
document.write("Type: ".concat(typeof(parseInt(stringNum))));

// Question no 10

document.write("<br /><br />");
var userInput = prompt("Enter Any Word:(In Small Letters):");
document.write("User Input: ".concat(userInput, "<br />"));
document.write("Upper Case: ".concat(userInput.toUpperCase()));

// Question no 11

document.write("<br /><br />");
var userInput = prompt("Enter Any Word:(In Small Letters):");
document.write("User Input: ".concat(userInput, "<br />"));
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence;
}
document.write("Upper Case: ".concat(titleCase(userInput)));

// Question no 12

document.write("<br /><br />");
var num = 35.36;
document.write("Number: ".concat(num, "<br />"));
document.write("Result: ".concat((num*100).toString()));

// Question no 13

document.write("<br /><br />");
var username = prompt("Enter Your Username:");
for (var i=0; i<username.length;i++) {
    if (username[i] === "@") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === "!") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === ",") {
        alert("Please Enter a valid username");
        break;
    }
    else if (username[i] === ".") {
        alert("Please Enter a valid username");
        break;
    }           
}

// Question no 14

document.write("<br /><br />");
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userinput = prompt("Welcome to Daniyal's Bakery, What do you want to order sir/ma'am?");
userinput = userinput.toLowerCase();
for (var i=0; i<A.length; i++) {
    if (userinput === A[i]) {
        alert(userinput+" is Available at index ".concat(A.indexOf(A[i]), " in Our Bakery"));
        break;
    }
    else {
        alert("We are Sorry. ".concat(userinput, " is not available in our Bakery"));    
        break;
    }
}

// // Question no 15


// Question no 16

document.write("<br /><br />");
var university = 'University of Karachi';
var uniArr = university.split(" ");
for (var i=0;i<university.length;i++) {
    document.write(university[i]+"<br />");
}

// Question no 17

document.write("<br /><br />");
stringInput = prompt("Enter the Word:");
document.write(stringInput.charAt(stringInput.length - 1));

// Question no 18

document.write("<br /><br />");
var stringForStr = "The quick brown fox jumps over the lazy dog";
stringFor = stringForStr.split(" ");
var strCounter = 0;
for (var i=0; i<stringFor.length; i++) {
    if (stringFor[i] === "the") {
        ++strCounter;
    }
    else if (stringFor[i] === "The") {
        ++strCounter;
    }
}
document.write("Text: ".concat(stringForStr, "<br />"));
document.write("There are ".concat(strCounter, " occurrence(s) of the word 'the'"));

// Chapter no 26-30

// Question no 1

document.write("<br /><br />");
var num = prompt("Enter a number");
document.write("Number: ".concat(num, "<br />"));
document.write("Round Off Value: ".concat(Math.round(num), "<br />"));
document.write("Floor Value: ".concat(Math.floor(num), "<br />"));
document.write("Ceil Value: ".concat(Math.ceil(num)));

// Question no 2

document.write("<br /><br />");
var num = prompt("Enter a number");
document.write("Number: ".concat(num, "<br />"));
document.write("Round Off Value: ".concat(Math.round(num), "<br />"));
document.write("Floor Value: ".concat(Math.floor(num), "<br />"));
document.write("Ceil Value: ".concat(Math.ceil(num)));

// Question no 3

document.write("<br /><br />");
var abs = prompt("Enter The Number");
document.write("Absolute value: ".concat(Math.abs(abs)));

// Question no 4

document.write("<br /><br />");
document.write("Random Dice Value: ".concat(Math.floor(Math.random() * 6) + 1, "<br />"));
document.write("Random Dice Value: ".concat(Math.floor(Math.random() * 6) + 1));

// Question no 5

document.write("<br /><br />");
var coin = Math.floor(Math.random()*2) +1;
if (coin === 1) {
    document.write(coin+"<br />");
    document.write("Random Coin Value: Heads");
}
else {
    document.write(coin+ "<br />");
    document.write("Random Coin Value: Tails");
}

// Question no 6

document.write("<br /><br />");
document.write("Random Number Between 1 and 100: ".concat(Math.floor(Math.random()*100)+1));

// Question no 7

document.write("<br /><br />");
var weight = prompt("Enter your weight in kilogram:");
weight = parseFloat(weight);
document.write("The Weight of the User is: ".concat(weight), " Kilograms");

// Question no 8

document.write("<br /><br />");
var secretNo = Math.floor(Math.random()*10)+1;
var userNo = prompt("Guess The Number between 1 to 10:");
userNo = parseInt(userNo);
if (userNo === secretNo) {
    alert("Congralutions! You Have Won");
}
else {
    alert("Try Again..!");
}

// Chapter no 31-34

// Question no 1

document.write("<br /><br />");
var vdaysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octubar', 'November', 'December'];
var currDatenTime = new Date();
document.write(currDatenTime.toString());

// Question no 2

document.write("<br /><br />");
var currMonth = new Date();
document.write("current Month: ".concat(monthsList[currMonth.getMonth()]));

// Question no 3

document.write("<br /><br />");
var currDay = new Date();
document.write("current Month: ".concat(vdaysList[currDay.getDay()]));

// Question no 4

document.write("<br /><br />");
var chkDay = new Date();
if (chkDay.getDay() === 0 || chkDay.getDay() === 6) {
    alert("It's Fun Day");
}

// Question no 5

document.write("<br /><br />");
var chkDaysLimit = new Date();
if (chkDaysLimit.getDate() < 16) {
    document.write("First Fifteen Days of the month");
}
else {
    document.write("Last Fifteen Days of the month");
}

// Question no 6

document.write("<br /><br />");
var elapsedDate = new Date();
document.write("Current Date: ".concat(elapsedDate.toString(), "<br />"));
document.write("Elapsed Miliseconds since january 1, 1970: ".concat(elapsedDate.getTime(), "<br />"));
document.write("Elapsed Minutes since january 1, 1970: ".concat(elapsedDate.getTime()/(60*60), "<br />"));

// Question no 7

document.write("<br /><br />");
var chkAmPm = new Date();
if (chkAmPm.getHours() >= 12) {
    alert("It's PM")
}
else {
    alert("It's AM");
}
document.write(chkAmPm.getHours());

// Question no 8

document.write("<br /><br />");
var dateObj = new Date();
dateObj.setMonth(11);
dateObj.setDate(31);
dateObj.setMinutes(00);
dateObj.setSeconds(00);
dateObj.setHours(00);
document.write(dateObj.toString());

// Question no 9

document.write("<br /><br />");
var ramadanDate = new Date();
ramadanDate.setDate(18);
ramadanDate.setMonth(5);
ramadanDate.setFullYear(2015);
var firstRamadan = ramadanDate.getTime()/(24*60*60*1000);
//document.write("Days till 2015: ".concat(firstRamadan), "<br />");
var currDateForRamadan = new Date();
var currentDate = currDateForRamadan.getTime()/(24*60*60*1000);
//document.write("Days till 2020: ".concat(currentDate), "<br />");
document.write(Math.round(currentDate - firstRamadan)+" Days has Passed Since 1st Ramadan, 2015");

// Question no 10

document.write("<br /><br />");
var refDate = new Date();
refDate.setDate(5);
refDate.setMonth(11);
refDate.setFullYear(2015);
refDate.setHours(22);
refDate.setMinutes(50);
refDate.setSeconds(16);
//document.write("Reference Date: "+ refDate.toString()+ "<br />");
var elapsedDate = new Date();
elapsedDate.setDate(1);
elapsedDate.setMonth(0);
elapsedDate.setFullYear(2015);
elapsedDate.setHours(00);
elapsedDate.setMinutes(00);
elapsedDate.setSeconds(00);
//document.write("Starting Date: "+ elapsedDate.toString()+ "<br />");
var refTime = Math.round(refDate.getTime()/(1000));
//document.write(refTime);
var ElapTime = Math.round(elapsedDate.getTime()/1000);
//document.write("<br />"+ ElapTime);
document.write("<br />On reference Date".concat(refDate.toString(), ", ",(refTime - ElapTime), " Seconds had Passed since the beginning of 2015"));

// Question no 11

document.write("<br /><br />");
var dateObjForDT = new Date();
document.write("Current Date: "+dateObjForDT.toString()+"<br />");
dateObjForDT.setHours(dateObjForDT.getHours()-1);
document.write("<br />one hour ago, it was "+dateObjForDT.toString()+"<br />");

// Question no 12

document.write("<br /><br />");
var dateObjCentury = new Date();
alert("Current Date: "+dateObjCentury.toString());
dateObjCentury.setFullYear(dateObjCentury.getFullYear()-100);
alert("100 year ago, it was "+dateObjCentury.toString());

// Question no 13

document.write("<br /><br />");
var usrAge = prompt("Enter Your Age:");
usrAge = parseInt(usrAge);
var DateForAge = new Date();
document.write("Your Age is: ".concat(usrAge, "<br />"));
document.write("Your Birth Year is: ".concat(DateForAge.getFullYear() - usrAge));

// Question no 14

document.write("<br /><br />");
document.write("<h1>K-Electric Bill</h1>");
var DateFromE = new Date();
var cstName = prompt("Customer Name:");
document.write("Customer Name: ".concat(cstName));
let monthList = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octubar', 'November', 'December'];
document.write("<br />Month: ".concat(monthsList[DateFromE.getMonth()]));
var nofOFUnit = prompt("Enter Number of Units:");
document.write("<br />Number of Units: ".concat(nofOFUnit));
var chargePerUnit = prompt("Enter Charge Per Unit:");
document.write("<br />Charges Per Unit: ".concat(chargePerUnit));
document.write("<br />Net Amount Payable (Within Due Date): ".concat(nofOFUnit*chargePerUnit));
var surcharge = 350;
document.write("<br />Late Payment surcharges: ".concat(surcharge));
document.write("<br />Gross Amount Payable (After due Date): ".concat((nofOFUnit*chargePerUnit)+surcharge));

// Chapter no 35-38

// Question no 1

document.write("<br /><br />");
function currDateNTime() {
    var dateTime = new Date();
    document.write(dateTime.toString());
}
currDateNTime();

// Question no 2

document.write("<br /><br />");
var fname = prompt("Enter First Name:");
var lname = prompt("Enter Last Name:");
function greet(fname, lname) {
    document.write("Assalam u Alaikum, ".concat(fname, " ", lname));
}
greet(fname, lname);

// Question no 3

document.write("<br /><br />");
var num1 = prompt("Enter first Number:");
num1 = parseInt(num1);
var num2 = prompt("Enter Second Number:");
num2 = parseInt(num2);
function addition(num1, num2) {
    return num1 + num2;
}
document.write("Addition of Two Numbers is: ".concat(addition(num1, num2)));

// Question no 4

document.write("<br /><br />");
var num1 = prompt("Enter first Number:");
num1 = parseInt(num1);
var num2 = prompt("Enter Second Number:");
num2 = parseInt(num2);
var operator = prompt("+ for Add, - for substract, x for multiply, / for divide");
function calculator(num1, num2, operator) {
    if (operator === "+") {
        document.write("Addition of two numbers: ".concat(num1 + num2));
    }
    else if (operator === "-") {
        document.write("Substraction of two numbers: ".concat(num1 - num2));
    }
    if (operator === "x") {
        document.write("Multiplication of two numbers: ".concat(num1 * num2));
    }
    if (operator === "/") {
        document.write("Division of two numbers: ".concat(num1 / num2));
    }
}
calculator(num1, num2, operator);

// Question no 5

document.write("<br /><br />");
var num = prompt("Enter the number to square:");
function sqTheNumber(num) {
    return num*num;
}
document.write("Square of ".concat(num, " is ", sqTheNumber(num)));

// Question no 6

document.write("<br /><br />");
var numForFactorial = prompt("Enter the number");
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
document.write("Factorial of ".concat(numForFactorial, " is ", factorial(numForFactorial)));

// Question no 7

document.write("<br /><br />");
var startValue = prompt("Enter Starting Value");
var endValue = prompt("Enter Ending Value:");
function counting(sValue, eValue) {
    if (sValue < eValue) {
        for (var i=sValue; i<=eValue; i++) {
            document.write("Series in Increasing Order"+sValue+" ");
            sValue++;
        }
    }
    else if (eValue < sValue) {
        for (var i=sValue; i>=eValue; i--) {
            document.write("Series in Decreasing Order"+sValue+" ");
            sValue--;
        }
    }
}
counting(startValue, endValue);

// Question no 8

document.write("<br /><br />");
var base = prompt("Enter Base:");
base = parseInt(base);
var perpen = prompt("Enter Perpendicular");
perpen = parseInt(perpen);
function calculateHypotenuse(b, p) {
    return Math.sqrt(calculateSquare(b) + calculateSquare(p));
    function calculateSquare(n) {
        return n*n;
    }
}
document.write("Hypotenuse is: ".concat(calculateHypotenuse(base, perpen)));

// Question no 9

document.write("<br /><br />");
var width = prompt("Enter Width");
width = parseInt(width);
var height = prompt("Enter Height");
height = parseInt(height);
function AOfRectangle(w, h) {
    return w*h;
}
document.write("Area of Rectangle with Values as Argument: ".concat(AOfRectangle(3.4, 5.6)));
document.write("<br />Area of Rectangle with Variables as Argument: ".concat(AOfRectangle(width, height)));

// Question no 10

document.write("<br /><br />");
var strValue = prompt("Enter Any Word");
function Palindrome(string) {
    if (string == string.split('').reverse().join('')) {
        document.write(string + ' is palindrome.');
    }
    else {
        document.write(string + ' is not palindrome.');
    }
}
Palindrome(strValue);

// Question no 11

document.write("<br /><br />");
var str = "the quick brown fox";
document.write("EXAMPLE STRING: "+str+"<br />");
function toTitleCase(str) {
    var sen = str.toLowerCase().split(" ");
    for (var i=0; i<sen.length; i++) {
        sen[i] = sen[i][0].toUpperCase() + sen[i].slice(1);
    }
    document.write(sen.join(" "));
    return sen;
}
document.write("EXPECTED OUTPUT: ");
toTitleCase(str);


// Question no 12

document.write("<br /><br />");
var exampleStr = "Web Development Tutorial";
document.write("EXAMPLE STRING: ".concat(exampleStr, "<br />"));
function longestWord(str) {
    var strSplit = str.split(" "); //convert string into array
    var lWord = 0;
    var strWord = "";
    for (var i=0; i<strSplit.length; i++) {
        if (strSplit[i].length > lWord) {
            lWord = strSplit[i].length;
            strWord = strSplit[i];
        }
    }
    return strWord;
}
document.write("EXPECTED OUTPUT: ".concat(longestWord(exampleStr)));

// Question no 13

document.write("<br /><br />");
var str = prompt("Enter the Sentence/Word:");
var letter = prompt("Enter the Letter:");
function letterCounter(s, l) {
    var count = 0;
    for (var i=0; i<s.length; i++) {
        if (s[i] === l) {
            count++;
        }
    }
    return count;
}
document.write(letter+" is "+letterCounter(str, letter)+" times in "+str);

// Question no 14

document.write("<br /><br />");
var radius = prompt("Enter Radius For Circumference & Radius:");
function calcCircumference(r) {
    return "The Circumference is: "+2*Math.PI*r;
}
function calcArea(r) {
    return "The Area is: "+Math.PI*Math.pow(r, 2);
}
document.write(calcCircumference(radius)+"<br />");
document.write(calcArea(radius));
