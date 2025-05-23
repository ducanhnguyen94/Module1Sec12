let a = 0;
let b = 1;
let c;

for (let i = 0; i < 100;i++) {
    
    c = a + b;
    a = b;
    b = c;

    if (c % 5 == 0) {
        document.write(c);
        break;
    }
    
}