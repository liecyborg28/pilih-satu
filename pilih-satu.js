// Object Declaration
let Opsi = {
//   Isian pilihan sebaiknya tidak melebihi 10
    pilihan : ['Opsi 1', 'Opsi 2', 'Opsi 3', 'Opsi 4', 'Opsi 5', 'Opsi 6', 'Opsi 7', 'Opsi 8', 'Opsi 9', 'Opsi 10],
    card : [],
    judul : [],
    isian : [],
    gambar : [],
    tombol : [],
    responden : [],
    hasil : [],
    peringkat : [],
    gambarMini : [],
    bar : [],
    persentase : [],
    kesempatan : [],
    total : 0
};

// DOM Selection
const container = document.querySelector('#container'),
    list = document.querySelector('.peringkat'),
    main = document.querySelector('section'),
    simpan = document.querySelector('.simpan'),
    total = document.querySelector('div.hasil p');

function isiNilai() {
    Opsi.pilihan.forEach(function() {
        Opsi.responden.push(0);
        Opsi.hasil.push(0);
        Opsi.kesempatan.push('on');
    });
}

function tampilkanOpsi() {
    Opsi.pilihan.forEach(function(x, i) {
        Opsi.card[i] = document.createElement('div');
        Opsi.judul[i] = document.createElement('div');
        Opsi.isian[i] = document.createTextNode(`${x}`);
        Opsi.gambar[i] = document.createElement('img');
        Opsi.gambar[i].setAttribute('src', `image/${[i+1]}.jpg`);
        Opsi.gambar[i].setAttribute('alt', `Gambar ${[i+1]}`);
        Opsi.tombol[i] = document.createElement('button');
        Opsi.tombol[i].innerHTML = 'Pilih';
        // Inheritance
        main.appendChild(Opsi.card[i]);
        Opsi.judul[i].appendChild(Opsi.isian[i]);
        Opsi.card[i].appendChild(Opsi.judul[i]);
        Opsi.card[i].appendChild(Opsi.gambar[i]);
        Opsi.card[i].appendChild(Opsi.tombol[i]);
        Opsi.card[i].classList.add('card');
        Opsi.judul[i].classList.add('card-header');
        Opsi.tombol[i].classList.add('card-button');
    });
}

function ambilData() {
    Opsi.pilihan.forEach(function(x, i) {
        Opsi.tombol[i].addEventListener('click', function() {
            if(Opsi.kesempatan[i] == 'on') {
                konfirmasi = confirm(`Anda yakin memilih ${x}?`);
                if(konfirmasi == true) {
                    // Beri style
                    Opsi.card[i].classList.add('click-card');
                    Opsi.gambar[i].classList.add('click-gambar');
                    Opsi.tombol[i].classList.add('click-tombol');
                    simpan.classList.add('click-simpan');
                    // Masukkan responden
                    Opsi.responden[i] += 1;
                    Opsi.total += 1;
                    // Reset Array
                    Opsi.kesempatan.splice(0,Opsi.pilihan.length);
                    // Isi kembali array dengan nilai lain
                    for(let i = 0; i < Opsi.pilihan.length; i++) {
                        Opsi.kesempatan.push('off');
                    }
                }
            }

            else {
                alert('Hanya dapat memilih satu opsi');
            }
        });
    });
}

function ambilWarna() {
    Opsi.pilihan.forEach(function(x, i) {
        switch (i) {
            case 0:
                Opsi.card[i].style.backgroundColor = '#e74c3c';
                Opsi.gambarMini[i].style.backgroundColor = '#e74c3c';
                Opsi.bar[i].style.backgroundColor = '#e74c3c';
                break;
            case 1:
                Opsi.card[i].style.backgroundColor = '#2c3e50';
                Opsi.gambarMini[i].style.backgroundColor = '#2c3e50';
                Opsi.bar[i].style.backgroundColor = '#2c3e50';
                break;
            case 2:
                Opsi.card[i].style.backgroundColor = '#f1c40f';
                Opsi.gambarMini[i].style.backgroundColor = '#f1c40f';
                Opsi.bar[i].style.backgroundColor = '#f1c40f';
                break;
            case 3:
                Opsi.card[i].style.backgroundColor = '#2ecc71';
                Opsi.gambarMini[i].style.backgroundColor = '#2ecc71';
                Opsi.bar[i].style.backgroundColor = '#2ecc71';
                break;
            case 4:
                Opsi.card[i].style.backgroundColor = '#3498db';
                Opsi.gambarMini[i].style.backgroundColor = '#3498db';
                Opsi.bar[i].style.backgroundColor = '#3498db';
                break;
            case 5:
                Opsi.card[i].style.backgroundColor = '#9b59b6';
                Opsi.gambarMini[i].style.backgroundColor = '#9b59b6';
                Opsi.bar[i].style.backgroundColor = '#9b59b6';
                break;
            case 6:
                Opsi.card[i].style.backgroundColor = '#1abc9c';
                Opsi.gambarMini[i].style.backgroundColor = '#1abc9c';
                Opsi.bar[i].style.backgroundColor = '#1abc9c';
                break;
            case 7:
                Opsi.card[i].style.backgroundColor = 'salmon';
                Opsi.gambarMini[i].style.backgroundColor = 'salmon';
                Opsi.bar[i].style.backgroundColor = 'salmon';
                break;
            case 8:
                Opsi.card[i].style.backgroundColor = '#95a5a6';
                Opsi.gambarMini[i].style.backgroundColor = '#95a5a6';
                Opsi.bar[i].style.backgroundColor = '#95a5a6';
                break;
            case 9:
                Opsi.card[i].style.backgroundColor = 'purple';
                Opsi.gambarMini[i].style.backgroundColor = 'purple';
                Opsi.bar[i].style.backgroundColor = 'purple';
                break;
            default:
                alert('Pilihan warna melebihi kapasitas!');
                alert('Sementara hanya dapat membuat 10 opsi');
                break;
        }
    });
}

function filterData() {
    Opsi.pilihan.forEach(function(x, i) {
        if(Opsi.pilihan[i].length > 20) {
            Opsi.pilihan[i] = Opsi.pilihan[i].split("", 20);
            Opsi.pilihan[i] = Opsi.pilihan[i].join("");
        }
    });
}

function buatRanking() {
    Opsi.pilihan.forEach(function(x, i) {
        Opsi.peringkat[i] = document.createElement('div');
        Opsi.peringkat[i].classList.add('order');
        Opsi.gambarMini[i] = document.createElement('img');
        Opsi.gambarMini[i].setAttribute('src', `image/${[i+1]}.jpg`);
        Opsi.gambarMini[i].classList.add('gambar-mini');
        Opsi.bar[i] = document.createElement('div');
        Opsi.bar[i].classList.add('bar');
        Opsi.persentase[i] = document.createElement('div');
        Opsi.persentase[i].classList.add('persen');
        Opsi.persentase[i].innerHTML = `${Opsi.hasil[i]}%`;
        // inheritance
        list.appendChild(Opsi.peringkat[i]);
        Opsi.peringkat[i].appendChild(Opsi.gambarMini[i]);
        Opsi.peringkat[i].appendChild(Opsi.bar[i]);
        Opsi.peringkat[i].appendChild(Opsi.persentase[i]);
    });
}

function tampilkanHasil() {
    Opsi.pilihan.forEach(function(x, i) {
        Opsi.hasil[i] = (Opsi.responden[i] * 100) / Opsi.total;
        Opsi.hasil[i] = Math.round(Opsi.hasil[i].toFixed(5));
        Opsi.bar[i].style.width = `${Opsi.hasil[i]}%`;
        Opsi.bar[i].style.transition = '1s';
        Opsi.persentase[i].innerHTML = `${Opsi.hasil[i]}%`;
        Opsi.persentase[i].style.transition = '1s';
    });
}

// Call Function
isiNilai();
tampilkanOpsi();
filterData();
buatRanking();
ambilWarna();
ambilData();

simpan.addEventListener('click', function() {
    if(Opsi.kesempatan[0] == 'off') {
        alert('Voting Anda telah tersimpan!');
        tampilkanHasil();
        Opsi.kesempatan.splice(0,Opsi.pilihan.length);
        for(let i = 0; i < Opsi.pilihan.length; i++) {
            Opsi.kesempatan.push('on');
            // Kembalikan style seperti semula
            Opsi.card[i].classList.remove('click-card');
            Opsi.gambar[i].classList.remove('click-gambar');
            Opsi.tombol[i].classList.remove('click-tombol');
            simpan.classList.remove('click-simpan');
        }
        total.innerHTML = `Total Responden: ${Opsi.total}`;
    }

    else {
        alert('Maaf Anda belum memilih');
    }
});
