const input = document.getElementById('input');
const add = document.getElementById('addbtn');
const display = document.getElementById('displaybtn');
const result = document.getElementById('result');

let arr = [];

add.addEventListener('click', () => {
    if (input.value !== '') {
        arr.push(input.value);
    };
    input.value = '';
});

display.addEventListener('click', () => {
    arr.forEach(el => {
        let newP = document.createElement('p');
        newP.innerHTML = `Element ${arr.indexOf(el)}: ${el}`;
        result.appendChild(newP);
    });
    arr = [];
})