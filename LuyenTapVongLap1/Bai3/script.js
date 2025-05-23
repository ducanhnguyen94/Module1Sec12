let a = 0;
let b = 1;
let c;

for (let i = 1; i <= 20; i++) {
    
    document.write (a + '<br>');
    c = a + b;
    a = b;
    b = c;

}