// MULTIPLICATION TABLE 1-10
for (a = 1; a <= 10; a++) {
    for (i = 0; i <= 10; i++) {
        console.log(a + "x" + i + "=" + a * i);
    }
}

function table() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + "x" + j + "=" + i * j);
        }
}
}
table();

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
function fizzbuzz() {
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
}
fizzbuzz();

// Pattern Printing:
function pattern(rows) {
    for (let i = 0; i < rows; i++) {
        console.log('*');
    }
}
pattern(3);