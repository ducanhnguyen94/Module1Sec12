let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];

numbers.forEach(el => {
    if (el > max) {
        max = el;
    };
});

console.log(max);