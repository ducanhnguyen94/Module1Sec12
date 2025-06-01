let num = +prompt('Nhap gia tri can tim');

let arr = [-3, 2, 1, 3, 2, 10];
let index = 0;

for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
        console.log('Tim thay ' + num + ' tai ' + i);
        index++;
    };
};

if (index == 0) {
    console.log('Khong tim thay ' + num);
};