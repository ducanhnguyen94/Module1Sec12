let a = 0;
let b = 1;
console.log(a);
console.log(b);
while (a < 10000) {
    let fib = a + b;
    a = b;
    b = fib;
    console.log(fib);
}