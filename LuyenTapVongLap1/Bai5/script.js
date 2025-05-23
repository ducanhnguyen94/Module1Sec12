let a = 0;
let b = 1;
let c;
let tong = 0;

for (let i = 1; i <= 20; i++) {
    
    tong += a;
    c = a + b;
    a = b;
    b = c;
}

document.write(tong);