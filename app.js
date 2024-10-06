
// //      Q:no: 01;

var StudentName = [];
console.log(StudentName);

// //      Q:no: 02;

var futureStudent = [];
console.log(futureStudent);


// //      Q:no: 03;

var months = ["jan" , "feb", "mar" , "apr" , "may" , "jun" , "jul" , "aug","sep","oct","nov","dec"];
console.log(months);

// //      Q:no: 04;

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

// //      Q:no: 05;

var bol_ean = [true , false];
console.log(bol_ean);

//         Q:no: 06;

var mixed_arr = [1,"jan",2,"feb",3,"mar",4,"apr",5,"may",6,"jun",7,"jul",8,"aug",9,"sep",10,"oct",11,"nov",12,"dec",true,false];
console.log(mixed_arr);

// //      Q:no: 07;

var qualification = [ "1) SSC","2) HSC","3) BSC","4) BS","5) BCOM","6) MS","7) M.Phil.","8) PhD"];
document.write(`
    <ul style="list-style-type:none;">
  <li> ${qualification[0]} </li>
  <li> ${qualification[1]} </li>
  <li> ${qualification[2]} </li>
  <li> ${qualification[3]} </li>
  <li> ${qualification[4]} </li>
  <li> ${qualification[5]} </li>
  <li> ${qualification[6]} </li>
  <li> ${qualification[7]} </li>
  <li> </li>
  </ul>
    `);

// //      Q:no: 08;

var studentName = ["asad","shahmeer","haris"];
var studentNumber = [300,340,460];
var total = 500;
var percentage = [ studentNumber[0] / total * 100 + "%", studentNumber[1] / total * 100  + "%", studentNumber[2] / total * 100 + "%",  ];

document.write("score of asad is " + studentNumber[0] + ". " + "percentage is :" + percentage[0] +"<br>" + "score of shahmeer is " + studentNumber[1] + ". " + "percentage is : " + percentage[1] + "<br>" +  "score of haris is " + studentNumber[2] + "." + "percentage is : " + percentage[2] + "<br>");



//      Q:no: 09;

var colorNames = [];

//      a)

//a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.  ---------->

var userInput = prompt('Enter any color name and add colour at the start of the array.')
colorNames.unshift(userInput);
console.log("Add color to the beginning of the array .",colorNames)

//      b)

//Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.  ---------->

var userInput= prompt('Enter any color name and add color at the end of the array.')
colorNames.push(userInput);
console.log("Add color to the end of the array .", colorNames);

//      c)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser. ---------->

colorNames.splice(0,0, "green","yellow");
console.log("Add two more color to the beginning of the array.",colorNames); 

//      d)

// d. Delete the first color in the array. Display the updated
// array in your browser.  ---------->

colorNames.shift();
console.log("Delete the first color in the array.",colorNames);

//      e)

// e. Delete the last color in the array. Display the updated
// array in your browser.  ---------->

colorNames.pop();
console.log("Delete the last color in the array. ", colorNames);

//      f)

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser. ---------->

var userIndex_nmbr = +prompt("Which index do you want to add color to? Enter index number");
var user_color = prompt("Enter color")

colorNames.splice(userIndex_nmbr,0, user_color);
console.log("Which index do you want to add color to?",colorNames);

//      g)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.  ---------->

var userIndex_nmbr = +prompt("Which index do you want to delete color to? Enter index number ");
var userIndex_quantity = +prompt(" how many colors he/she wants to delete.");
colorNames.splice(userIndex_nmbr,userIndex_quantity );
console.log("Which index do you want to delete color to? and how many colors he/she wants to delete.",colorNames);

//      Q:no: 10;

var student_score = [320,280,420,120];
student_score.sort();
document.write("Score of students :" + student_score + "<br>");
document.write("Ordered score students : " + student_score + "<br>");

//      Q:no: 11;

var cities = ["karachi","lahore","islamabad", "quetta","peshawar"];
var newArr = cities.slice(2, 4);
document.write(`Cities list: <br>  ${cities} <br><br>  Seleted list: <br>  ${newArr} `)


//      Q:no: 12;

var sentense = ["this","is","my","cat"];
var resulte = sentense.join(' ');
document.write("Array: " + "<br>" + sentense + "<br>" + "<br>");
document.write("String: " + "<br>" + resulte + "<br>");

//      Q:no: 13;

var devices = [];
devices.unshift("keyboard");
devices.unshift("mouse");
devices.unshift("printer");
devices.unshift("moniter");
devices.reverse();
document.write("out:"+"<br>" + devices[0] + "<br>" + "out:"+"<br>" + devices[1] + "<br>" + "out:"+"<br>" + devices[2] + "<br>" + "out:"+"<br>" + devices[3] +"<br>"+"<br>");

//      Q:no: 14;

var devices = [];
devices.unshift("keyboard");
devices.unshift("mouse");
devices.unshift("printer");
devices.unshift("moniter");
document.write("<br>"+"<br>"+"out:"+"<br>" + devices[0] + "<br>" + "out:"+"<br>" + devices[1] + "<br>" + "out:"+"<br>" + devices[2] + "<br>" + "out:"+"<br>" + devices[3] );

//      Q:no: 15;

var phonemanu = ["Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
document.write(`
    <select name="" id="">
    <option value=""> ${phonemanu[0]} </option>
    <option value=""> ${phonemanu[1]} </option>
    <option value=""> ${phonemanu[2]} </option>
    <option value=""> ${phonemanu[3]} </option>
    <option value=""> ${phonemanu[4]} </option>
    </select>
    `)
