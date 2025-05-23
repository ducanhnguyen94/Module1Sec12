const table = document.getElementById('table');

let a = +prompt('Nhap so:');

for (let i = 1; i <= a; i ++) {
    let newTr = document.createElement('tr');
    table.appendChild(newTr);
    for (let j = 1; j <= 9; j++) {
        let newTd = document.createElement('td');
        newTd.innerHTML = `${j} x ${i} = ${i * j}`;
        newTr.appendChild(newTd);
    }
};