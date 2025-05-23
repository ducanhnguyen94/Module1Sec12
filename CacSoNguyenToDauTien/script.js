let numbers = +prompt('Nhap so'); // 1
let count = 0;
let n = 2;
let prime = true;


while (count < numbers) {
    
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
        prime = true;
    };

    if (prime) {
        document.write(n + '<br>');
        count++;
    };
   
    n++;
    
}
