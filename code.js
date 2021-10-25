// let header = document.getElementById("myHeader");
// header.style="color:blue; background-color:red;"
// header.innerHTML = "Elephant Academy" ;


// let luckyNumbers = [4, 8, 15, 16, "twenty", false];

// luckyNumbers[0] = 90;
// document.write(luckyNumbers[0] + "<br>");
// document.write(luckyNumbers[1] + "<br>");
// document.write(luckyNumbers.length);

// let numberGrid = [ [1, 2], [3, 4]];

// document.write(numberGrid[0][0] + "<br>");
// document.write(numberGrid[0][1] + "<br>");


// let friends = new Array();
// friends.push("Oscar");
// friends.push("Angela");
// friends.push("Kevin");

// friends.pop();
// document.write( friends + "<br>" );
// document.write( friends.indexOf("Angela") + "<br>" );
// document.write( friends.indexOf("Z") + "<br>" );
// document.write( friends.reverse() + "<br>" );
// document.write( friends.sort() + "<br>" );


// let student = {
//     name: "Jim",
//     major: "Business",
//     age: 19,
//     gpa: 2.5
// }


// student.name = "Andy"
// document.write( student.name + "<br>" );
// document.write( student.major + "<br>" );
// document.write( student.gpa + "<br>" );


// let sum = addNumbers(4, 60);
// document.write(sum);

// function addNumbers(num1, num2){
//     return num1 + num2;
// }


// function handleClick(element){
//     alert("Clicked " + element.id);
// }

let header = document.getElementById("myHeader");

header.addEventListener("click", function(){
    alert("You clicked " + header.id)
});