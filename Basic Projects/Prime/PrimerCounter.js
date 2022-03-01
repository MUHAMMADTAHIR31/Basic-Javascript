var number;

do {

    number = prompt("Enter Number");
    number = parseInt(number);

} while (!Number.isInteger(number));



function isPrime(n) {



    if (n <= 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else {
        var i = 2;
        var counter = 0;
        while (i < n && (n % i != 0)) {
            i++;
            ++counter;
        }
        if (i == n) {
            return true;
        } else {
            return false;
        }
    }
}

printPrime(number);

function printPrime(max) {

    var counter = 0;
    var prime = ' ';
    var i = 2;

    while (i <= max) {
        if (isPrime(i)) {
            counter++;
            prime += i + ' ';
        }
        i++;
    }
    console.log('There are ' + counter + ' prime numbers smaller than ' + max + '.');
    if (counter > 0)
        console.log(prime);
}