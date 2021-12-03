function getCount(num){
    if(num < 0){
        num = -num;
    }
    let count = 0;
    while(num > 0){
        let lastDigit = num % 10;
        num = (num - lastDigit) / 10;      
        count++;
    }
    console.log(count);
}