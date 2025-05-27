let dai = +prompt('Nhap chieu dai');
let rong = +prompt('Nhap chieu rong');
let div = document.getElementById('div');

for (let i = 1; i <= dai; i++) {
    let newP = document.createElement('p');
    newP.innerHTML = '';
    div.appendChild(newP);
    let j = 1;
    while (j <= rong) {
        if (1 < i && i < dai) {
            if (j == 1 || j == rong) {
                newP.innerHTML += '*';
            } else {
                newP.innerHTML += '&nbsp;&nbsp;';
            };
        } else {
            newP.innerHTML += '*';
        };
        j++;
    }
}