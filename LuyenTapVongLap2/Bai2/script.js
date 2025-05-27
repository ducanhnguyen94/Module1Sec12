let num = +prompt('Enter Number');
let giaiThua = 1;
let i = 1;
while (num > 0 && Number.isInteger(num)) {
    giaiThua *= i;
    i++;
    if (i > num) {
        break;
    }
}

console.log(giaiThua);