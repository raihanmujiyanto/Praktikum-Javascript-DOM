console.log("Bismillah Kita Belajar Javascript DOM");

// Aktivitas 1 DOM SELECTION 
// Penjelasan kita harus menyeleksi atau "menangkap"
// Mengambil Elemen HTML berdasarkan ID/Class


// 1. Mengambil Elemen Judul 
// getElemenyByid -> seleksi berdasasarkan id
const judulUtama = document.getElementById("judul-utama");

// 1.1 Mengambil Elemen Sub Judul
// querySelector(#...)
const subJudul = document.querySelector("#sub-judul");

// 2. Mengambil elemen pada kartu 1 (Kartu Manipulasi Teks & Style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi")

// 3. Mengambil Elemen Tombol-Tombol Aksi pada Kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil Elemen pada kartu 2 (fitur catatan dinamis / todolist sederhana)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");



// Aktivitas 2 Manipulasi Teks & Style
// addEventListener("click", function(){...})
btnUbahTeks.addEventListener("click", function(){
    // .innerText = Mengganti atau Mengisi tulisan teks yang ada di HTML
    teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

    // .style.color = Mengubah warna teks secara langsung melalui Javascript
    teksPreview.style.color = "#1f1d97"; 

    // console.log mencetak pesan di console
    console.log("DOM Teks Preview telah diperbaharui");
});


// B -- Manipulasi Class Css Menggunakan ClassListToggle()
btnToggleWarna.addEventListener("click", function(){
    // .classList.toggle = Fitur unutk saklar otomatis
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Class Higlight berhasil di switch");
});

// C-- Mengembalikan (Reset) Teks & style ke kondisi semula
btnReset.addEventListener("click" , function(){
    // 1. Kembalikan tulisan teks ke aslinya 
    teksPreview.innerText("Halo! Teks ini siap diubah oleh Javascript")
    // 2. Kosongkan warna inline style (style.color) agar balik ke css bawaan 
    teksPreview.style.color= "";
    // 3. Hapus Class khusus menggunakan >classList.remove("...")
    boxPreview.classList.remove("active-mode")
    cardManipulasi.classList.remove("highlight")

    console.log("DOM Tampilan DIRESET ")

})

// Aktivitas 3 & 4: Element Dinamis & event Handling (TO-DO LIST)
// Penjelasan 
// bagian ini kita bakal belajar buat eemet html lu secara otomatis 
// mengisi teks nya, memberi tombol hapus, lalu menemepelkan ke dala layar <ul>

// langkah 1 : Variabel peneampung angka jumlah catatan 
// 'let' digunakan karena nilai variabel yang aka berubah ubah.
let totalCatatan=0;

// langkah 2 : membuat function supaya update angka counter & pesan status 
// fungsi ini kumpulan perintah yang diberi nama. kita bisa panggil kapan saja. 
function perbaruiJumlah() {
    // masukan angka total catatan terbaru ke dalam tag <span id = "jumlah-catatan">
    jumlahCatatan.innerText = totalCatatan

    // periksa kondisi : apakah catatan = 0 ?
    if (totalCatatan ===0 ) {
        // jika 0 : hapus class "hidden" supaya teks "belum ada catatan" muncul ke layar 
        pesanKosong.classList.remove("hidden")
    }
    else {
        // jika >0 : tambahkan class hidden agar teks "belum ada catatan" SEMBUNYI/hilang 
        pesanKosong.classList.add("hidden")
    }
}

// langkah 3 : funtion tambah catatan fungsi utama logika
function tambahCatatan() {
    // 3.1 input catatan value = mengambil teks yang diketik oleh user di kolom input 
    // .trim () = untuk menghapus spasi diawal dan spasi di akhir
    const isiTeks = inputCatatan.value.trim()
    
    // 3.2 valisdasi input: Jika isiTeks kosong tampilkan peringatan berupa alert 
    if(isiTeks == ""){
        alert("catatan tidak boleh kosong!")
        return;
    }

    // 3.3 document .Create.Element("li") = membuat tag html <li> baru secara dinamis pake Javascripst 
    const liBaru = document.createDocument("li");
    liBaru.innerHTML= "note-item"; 

    // 3.4 .innerHTML = mengisi Struktur didalam <li> dengan teks catatan & tombol "hapus"
    // tanda backtick (`)
    liBaru.innerHTML= `<span>${isiTeks}</span> <button class= "btn-hapus"> Hapus</button>`;
}

// langkah 4 : event listener klik tombol + tambah ( menggunakan mouse)
// ketika klik tombol = tambah jalankan fungsi TambahkanCatatan()
btnTambah.addEventListener("click", function(){
    tambahCatatan(); 
})