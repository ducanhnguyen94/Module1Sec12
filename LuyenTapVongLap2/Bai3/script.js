let div = document.getElementById('div');

for (let i = 1; i <= 5; i++) {
    let newP = document.createElement('p');
    newP.innerHTML = '';
    div.appendChild(newP);
    let j = 1;
    while (j <= i) {
        newP.innerHTML += '*';
        j++;
    }
}

