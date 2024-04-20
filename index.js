
//check if the given number is prime
let isPrime = function (num) {
    //return null if arg is 2 or less
    if (num <= 2) {
        return null;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

//check if each preceding number is prime
let prevPrime = function(num) {
    //ensuring it returns null if the arg is 2 or less
    if (num <= 2) {
        return null;
    }

    /* if a smaller number is found to be prime,
       return that number */
    for (let i = num - 1; i >= 0; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
}

//a bunch of tests
console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
