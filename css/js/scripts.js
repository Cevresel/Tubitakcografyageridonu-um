// Menü açma/kapama
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Kayıt formunun işlevi
const kayitForm = document.getElementById('kayit-form');
if (kayitForm) {
    kayitForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const okulAdi = document.getElementById('okul-adi').value;
        const okulNumarasi = document.getElementById('okul-numarasi').value;
        const isim = document.getElementById('isim').value;
        const email = document.getElementById('email').value;
        const sifre = document.getElementById('sifre').value;

        if (okulAdi && okulNumarasi && isim && email && sifre) {
            alert('Kayıt başarılı!');
            // Kayıt verilerini yerel depolama veya sunucuya kaydedebilirsiniz.
        } else {
            alert('Lütfen tüm alanları doldurun!');
        }
    });
}

// Veri Girişi formunun işlevi
const veriGirisForm = document.getElementById('veri-giris-form');
if (veriGirisForm) {
    veriGirisForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = document.getElementById('user-id').value;
        const email = document.getElementById('email').value;
        const atikTuru = document.getElementById('atikturu').value;
        const miktar = document.getElementById('miktar').value;

        if (userId && email && atikTuru && miktar) {
            alert('Veri başarıyla kaydedildi!');
            // Veriyi kaydetme işlemi burada yapılabilir.
        } else {
            alert('Lütfen tüm alanları doldurun!');
        }
    });
}
