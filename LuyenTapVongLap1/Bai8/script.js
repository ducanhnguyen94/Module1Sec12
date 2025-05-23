const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    let a = +prompt('Nhap so dau');
    let b = +prompt('Nhap so cuoi');
    let d = a + Math.round(Math.random() * (b - a));
    console.log(d);

    for (let i = 1; i <= 3; i++) {
        let c = +prompt('Nhap so muon doan');
        if (c == d) {
            alert('Chuc mung ban da doan dung');
            break;
        } else if (c < d) {
            alert('So ban doan be hon so can tim');
        } else {
            alert('So ban doan lon hon so can tim');
        };
        
    }
})