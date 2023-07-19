const sumAll = function(num1,num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    let finalNum = 0;
    if(num1 > num2){
        const tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    for(i = num1; i <= num2; i++){
        finalNum = finalNum + i;
    }
    return finalNum
};

// Do not edit below this line
module.exports = sumAll;
