let ogrenciFormlari = document.querySelector('.form-group');
let sonuc = document.querySelector('.sonuc');
let listeyiSil = document.querySelector('.listeyiSil');

let yazilimSonuc = document.querySelector('.yazilimSonuc');
let bilgisayarSonuc = document.querySelector('.bilgisayarSonuc');
let webSonuc = document.querySelector('.webSonuc');
let grafikSonuc = document.querySelector('.grafikSonuc');

let ogrenciData = [];

if(typeof localStorage.ogrenciData !== 'undefined') {
    ogrenciData =JSON.parse(localStorage.ogrenciData);
    renderSubmitForm();
}

function handleSubmitForm(e) {
    e.preventDefault();

    let formdata = new FormData(ogrenciFormlari);
    let formObj = Object.fromEntries(formdata);
    ogrenciData.push(formObj);

    ogrenciFormlari.reset();
    renderSubmitForm();
    save();
}

ogrenciFormlari.addEventListener('submit', handleSubmitForm);

function save() {
    localStorage.ogrenciData = JSON.stringify(ogrenciData);
}

function renderSubmitForm() {
        yazilimSonuc.innerHTML = '';
        bilgisayarSonuc.innerHTML = '';
        webSonuc.innerHTML = '';
        grafikSonuc.innerHTML = '';

        for(let i = 0; i < ogrenciData.length; i++) {
            let sinavSonuc = Number(((ogrenciData[i].vize1)/100)*30) + (((ogrenciData[i].vize2)/100)*30) + (((ogrenciData[i].finalSinavi)/100)*40);
            
        if(ogrenciData[i].bolum === 'Yazılım Mühendisliği') {
            yazilimSonuc.innerHTML +=  `<p> ${ogrenciData[i].adSoyad} ${ogrenciData[i].bolum} ${sinavSonuc} </p>`
        }
        if(ogrenciData[i].bolum === 'Bilgisayar Programcılığı') {
            bilgisayarSonuc.innerHTML +=  `<p> ${ogrenciData[i].adSoyad} ${ogrenciData[i].bolum} ${sinavSonuc}</p>`
        }
        if(ogrenciData[i].bolum === 'Web Tasarım Ve Kodlama') {
            webSonuc.innerHTML +=  `<p> ${ogrenciData[i].adSoyad} ${ogrenciData[i].bolum} ${sinavSonuc}</p>`
        }
        if(ogrenciData[i].bolum === 'Grafik Tasarım') {
            grafikSonuc.innerHTML +=  `<p> ${ogrenciData[i].adSoyad} ${ogrenciData[i].bolum} ${sinavSonuc}</p>`
        }
    }

}

function reset() {
    localStorage.clear();
    ogrenciData = [];
    renderSubmitForm();
}

listeyiSil.addEventListener('click', reset);