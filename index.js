// MULTIPLICATION TABLE 1-10
for (a = 1; a <= 10; a++) {
    for (i = 0; i <= 10; i++) {
        console.log(a + "x" + i + "=" + a * i);
    }
}

// PRIME NUMBERS 1-100
for (a = 2; a <= 100; a++) {
    prime = true;
    for (i = 2; i < a; i++) {
        if (a % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(a);
    }
}
// FIZZBUZZ PROGRAM
for (a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log(a + " " + "is FizzBuzz");
    } else if (a % 3 === 0) {
        console.log(a + " " + "is Fizz");
    } else if (a % 5 === 0) {
        console.log(a + " " + "is Buzz");
    }
    else {
        console.log(a);
    }
}