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

// let header = document.getElementById("myHeader");

// header.addEventListener("click", function(){
//     alert("You clicked " + header.id)
// });

// let myGrade = "A";
// switch(myGrade){
//     case "A":
//         document.write("You Pass");
//     case "F":
//         document.write("You Fail");
//     default:
//         document.write("Invalid grade");
// }

//---------------------------------------------------
//        LOOPS

//  let index = 1;
// while(index <= 5){
//     document.write(index);
//     index++
// }

// do {
//     document.write(index);
//     index++;
// }while(index <=5);

// for(let i = 0; i < 5; i++){
//     document.write(i);
// }

// let luckyNums = [4, 8, 15, 16, 23, 42];
// luckyNums.forEach(function(luckyNum){
//     document.write(luckyNum + "<br>");
// });

 //--------------------------------------------
 //    Extension catching

// let x = y + 9;

// try{
//     throw "Something went wrong"
//     // let x = y + 9;
// }catch(err){
//     document.write(err)
// }finally{

// }

//----------------------------------------------
//    Classes and Objects


// class Book {
//     constructor(title,author){
//         this.title = title;
//         this.author = author;
//     }
//     readBook(){
//         document.write("Reading " + this.title + " by " + this.author)
//     }
// }

// let book1 = new Book("Harry Potter", "JK Rowling");

// document.write(book1.title + "<br>");
// book1.readBook();

//--------------------------------------------------
//               Getters and Setters
class Book {
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    get title(){
        document.write("<p>getting</p>");
        return this._title;
    }
    
    set title(title){
        document.write("<p>setting</p>");
        this._title = title;
    }

    readbook(){
        document.write("Reading " + this._title + " by " + this.author)
    }
}

    let book1 = new Book ("Harry Potter", "JK Rowling");

    document.write(book1.title + "<br>");
    book1.readbook(); 