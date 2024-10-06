


//              Q no:01;

var empty = [[],[]]
document.write(`<h1> an empty multidimensional array. ${empty}</h1> <br>`);

//              Q no:02;

var multi_array = [ [0,1,2,3],[1,0,1,2],[2,1,0,1]];
var index0 = multi_array[0].join("");
var index1 = multi_array[1].join("");
var index2 = multi_array[2].join("");
document.write(`<h1> <br> <br><br>${index0}<br> ${index1}<br> ${index2}<br></h1><br><br>`)


//              Q no:03;

for(var i = 1; i <= 10; i++){
    document.write(`<h4>${i}</h4>`);    
}

//              Q no:04;

var userNum = +prompt("Enter a number to it is multiplication table");
var userLenght = +prompt("Enter lenght multiplication table");

for (var i = 1; i <= userLenght; i++){
    document.write("<br>"+ userNum + " x " + i + " = " + userNum * i + "<br>");
}


//              Q no:05;

var fruits = ["apple","banana","mango","orange","strawberry",];
for(var i = 0; i < fruits.length; i++){
    document.write(` ${fruits[i]} <br>`);
   
}
for(var i = 0; i < fruits.length; i++){
    document.write(`<br>Element index ${i} is ${fruits[i]}`)
}


//              Q no:06;

//  a)
document.write(`<br> <br> <h3>Counting</h3><br> <br>`)
for (var i=1; i<=10; i++ ){
    document.write(`${i},`)
}

//  b)
document.write(`<br> <br><h3> Revers Counting</h3> <br> <br>`)
for (var i=10; i>=1; i-- ){
    document.write(` ${i}, `)
}

//  c)
document.write(`<br> <br><h3> Odd</h3> <br> <br>`)
for (var i = 0; i <= 20; i++ ){

    if(i % 2 !== 0 ){

    document.write(`${i},`)
    }
}

//  c)
document.write(`<br> <br><h3> Even</h3> <br> <br>`)
for (var i = 0; i <= 20; i++ ){

    if(i % 2 === 0 ){

    document.write(`${i},`)
    }
}

//  e)
document.write(`<br> <br><h3>Series</h3> <br> <br>`)
for (var i = 0; i <= 20; i++ ){

    if(i % 2 === 0 ){

    document.write(`${i}k,`);
    }
}


//Qno 7

var bakery = ["cake", "apple", "pie", "cookie", "chips", "patties"]
var search_by_userinp = prompt("Enter an item to search :")
var found;
var index;


for( var i = 0 ; i < bakery.length ; i++){
    if(bakery[i] === search_by_userinp){
        found = true;
        index = i;
       
    }  
}
if (found){
    alert(`The item is available at index  ${index} in our bakery`)
    
}
else{
    alert("The item is not available in our bakery")
}


//              Q no:08;


var numbers = [24, 53, 78, 91];
var largest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    if(numbers[i +1] > largest){
        largest = numbers [i +1 ]
    }
}
document.write(`<br> <br> <br> Array items: ${numbers}<br>the largest numbers is ${largest} <br>`)
//              Q no:09;


var numbers = [24, 53, 78, 91,12];
var largest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    if(numbers[i +1] < largest){
        largest = numbers [i +1 ]
    }
}
document.write(`<br> <br> <br> Array items: ${numbers}<br>the smallest numbers is ${largest}<br><br> <br>`)

//              Q no:10;

 var five = 5 ;
 for(i = 1; i <= 20; i++){
    document.write(`${i*five},`)
 }