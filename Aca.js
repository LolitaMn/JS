function getCount(num){
    if(num < 0){
        num = -num;
    }
    let count = 0;
    while(num > 0){
        count++;
        num = Math.trunc(num / 10);      
        
    }
    return count;
}

let value = getCount(7956);


function detectPerson(age){
    if(age < 0){
        alert("invalid age")
    } else {
    if(age >= 18){
        return 'adult';
    } else if (age >= 2 && age < 18){
        return 'child';
    } else {
        return 'infant';
    }
  }
}

let person = detectPerson(18);

getSum(56, 68);
function getSum(a, b){
    return a + b;
};

let func = function(a, b){
    return a + b;
};

Math.round(14.3)// округление
Math.ceil(14.4)// округление вверх всегда
Math.floor(-14.3)//  округление вниз всегда
Math.trunc(14.4)// оставляет только целое число
Math.random()
Math.random() * 10
Math.pow(2, 3)// 8
Math.sqrt(9)// корень  из числа





