//
console.log("Bismillah Kita Belajar Javascript DOM");
//Aktivitas 1 DOM SELECTION
//penjelasan kita hars meneleksi ata "menangkap"
//mengambil elemen html berdasrakan ID/CSS

//1. Mengambil Elemen judul & Sub jdul
//getElementById -> seleksi berdasarkan id
const judulUtama = document.getElementById("judul-utama");

//1.1 Mengambil Elemen sub judul
//querySelector(#...)
const subJudul = document.querySelector("#sub-judul");

//2. mengambil elemen pada kartu 1 (kart manipulasi teks & style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

//3. Mengambil elemen tobol-tombol aksi pada kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

//4. Mengambil elmen pada kartu 2 (fitur cattan dinamis/to dolist sederhana)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

//Aktivitas 2 manipulasi teks & style
//addEventListener("click", function()..)
btnUbahTeks.addEventListener("click", function () {
  //.innertext = memnganti atau mengisi tulisan teks ang asa di html
  teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

  //.style.color = memngubah warna teks secara langsng melalui js
  teksPreview.style.color = "#1f1d97";
  // console.log mencetak pesan di console
  console.log("DOM Teks Preview telah diperbaharui");
});

//B -- Manipulasi class css menggnakan classListToggle()
btnToggleWarna.addEventListener("click", function () {
  //.classListener.toggle = fitur untutuk saklar otomatis
  boxPreview.classList.toggle("active-mode");
  cardManipulasi.classList.toggle("highlight");

  console.log("DOM Class Highlight berhasil di switch");
});

//C Mengembalikan (Reset) teks & style ke kondisi semula
btnReset.addEventListener("click", function () {
  //1. kembalikan tulisan tteks ke aslinya
  teksPreview.innerText = "Halo! Teks ini siap diubah oleh JavaScript.";

  //2. Kosongkan warna inline style (style.color = "") agar balik ke css bawaan
  teksPreview.style.color = "";

  //3. Hapus class khusus mengnakan .classList.remove(".....")
  boxPreview.classList.remove("active-mode");
  cardManipulasi.classList.remove("highlight");

  console.log("DOM Tampilan direset");
});

//Aktivitas 3&4;  Elemen dinamis & Event Handling (TO-DO LIST)
//Penjelasan
//BAgian ini kita bakal belajar buat elemen HTML LI secara ootomatis
//mengisi teks ya, memberi tombol hapus lalu menempelkan kedalam laya <ul>
let totalCatatan = 0;

//LAngkah 2: membuatu function supaya update angka countter & pesan status
//fungsi ini kumpulan perinta yang diberi nama. kita bisa panggil kapan saja
function perbaruiJumlah() {
  //masukan angka total catatan terbaru ke dalam tah<span id ="jumlah-catatamn">
  jumlahCatatan.innerText = totalCatatan;

  //periksa kondisi; apakah catatan 0?
  if (totalCatatan === 0) {
    //jika 0: hapus class "hidden" supaya teks "Belum ada catatan" muncul di layar
    pesanKosong.classList.remove("hidden");
  } 
  else {
    //jika > 0 : tammbahkan class"hidden" agar teks "belum ada catatan" SEMBUNYI/hilang
    pesanKosong.classList.add("hidden");
  }
}

//LAngkah 3: function tambah catatan fungsi utama logika
function tambahCatatan() {
  //3.1 input catatan value = mengambil teks yang diketik oleh user dikolom input
  //.trim() = untuk menghapus spasi diawal dan spasi di akhir
  const isiTeks = inputCatatan.value.trim();

  //3.2 Validasi input; jika isi Teks kosong tampilkan peringatan berua alert
  if (isiTeks === "") {
    alert("Catatan tidak boleh kosong!");
    return;
  }
  //3.3 document .create.Element("li") = membuat tag html <li> bar secara dinamis pake Javascript
  const liBaru = document.createElement("li");
  liBaru.className = "note-item";

  //3.4 .innerHTML = mengisi strktur di dalam <li> dengan teks catatan & tombil "hapus"
  //tanda backtick (`)
  liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

  //3.5 Menambahkan Event listener khusus tombol "Hapus" pada item <li>
  //liBaru.querySelector(."btn-hapus") menngambil berdasarkan class 'btn-hapus'
  const btnHapus = liBaru.querySelector(".btn-hapus");
  btnHapus.addEventListener("click", function () {
    liBaru.remove();
    totalCatatan--;
    perbaruiJumlah();
    console.log(`[DOM] Catatan "${isiTeks}" dihapus`);
  });

  //3.6 .appendChild (liBaru) = menempelkan elemen <li> didalam wadah  <ul id="daftar-catatan">
  daftarCatatan.appendChild(liBaru);

  //3.7 mengosongkan kembali isi kolom inpu  agar siap diketik lagi
  inputCatatan.value = "";

  //3.8 TotalCatatan++ increment total catatan ditambah 1x
  totalCatatan++;
  perbaruiJumlah();
  console.log(`DOM Catatan Baru ditambahkan : ${isiTeks}`);
}

//Langkah 4: Event Listener Klik tombol + tambah
//ketika klik tombol + tambah jalankan funngsi TambahCatatan()
btnTambah.addEventListener("click", function () {
  tambahCatatan();
});

//Lannngkah 5 Event Listener tombol "ENTER" (memnggnakan keyboard)
//ketika user mengetik dikolom inpt dan melepeas tombol -> (event : keyup)
inputCatatan.addEventListener("keyup", function (Event) {
  //perikasa apakah tombol keyboard yang ditekan adalah tombol enter?
  if (event.key === "Enter") {
    tambahCatatan();
  }
});