function hitungGaji() {
    // Mendapatkan input dari pengguna
    var namaKaryawan = document.getElementById("namaKaryawan").value;
    var gajiPokok = parseFloat(document.getElementById("gajiPokok").value);

    // Menghitung tunjangan (20% dari gaji pokok)
    var tunjangan = 0.2 * gajiPokok;

    // Menghitung pajak (15% dari gaji pokok ditambah tunjangan)
    var pajak = 0.15 * (gajiPokok + tunjangan);

    // Menghitung gaji bersih
    var gajiBersih = gajiPokok + tunjangan - pajak;

    // Menampilkan hasil di elemen dengan id "hasilGaji"
    document.getElementById("hasil").innerHTML = "Nama Karyawan: " + namaKaryawan + "<br>Gaji Bersih: " + gajiBersih;
}