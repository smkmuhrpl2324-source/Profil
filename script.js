// 1. Fungsi Sapaan Sederhana
function sapaPengunjung() {
  alert("Halo! Terima kasih sudah berkunjung ke profil saya.");
}

// 2. Fungsi Cek Usia dengan Logika Percabangan
function cekUsia() {
  // Mengambil nilai angka dari input HTML
  let usia = document.getElementById("inputUsia").value;
  let tempatHasil = document.getElementById("hasilCek");

  // Validasi jika input kosong
  if (usia === "") {
    tempatHasil.textContent = "Silakan masukkan angka umur terlebih dahulu!";
    return;
  }

  // Mengubah data teks menjadi angka
  usia = Number(usia);

  // Logika Percabangan
  if (usia < 12) {
    tempatHasil.textContent = "Status Usia: Anda masih Anak-anak.";
  } else if (usia <= 18) {
    tempatHasil.textContent = "Status Usia: Anda seorang Remaja.";
  } else {
    tempatHasil.textContent = "Status Usia: Anda sudah Dewasa.";
  }
}

function toggleDarkMode() {
  let body = document.body;

  // [TULIS KODE ANDA DI SINI]
  // Petunjuk: Gunakan classList.toggle untuk memasang/melepas kelas "dark-mode"
  // Contoh: body.classList.toggle("...");
  body.classList.toggle("dark-mode");
}
