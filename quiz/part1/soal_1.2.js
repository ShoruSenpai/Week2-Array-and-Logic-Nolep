// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// ```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {

    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.push("Pria", "SMA Internasional Metro");

    console.log(input);

    let tanggal = input[3].split("/");
    let bulan;
    switch (tanggal[1]) {
        case "01": bulan = "Januari"; break;
        case "02": bulan = "Februari"; break;
        case "03": bulan = "Maret"; break;
        case "04": bulan = "April"; break;
        case "05": bulan = "Mei"; break;
        case "06": bulan = "Juni"; break;
        case "07": bulan = "Juli"; break;
        case "08": bulan = "Agustus"; break;
        case "09": bulan = "September"; break;
        case "10": bulan = "Oktober"; break;
        case "11": bulan = "November"; break;
        case "12": bulan = "Desember"; break;
    }
    console.log(bulan);

    let tanggalArray = tanggal.slice(2).concat(tanggal.slice(0, 2));
    console.log(tanggalArray);

    let formatTanggal = tanggal.join("-");
    console.log(formatTanggal);

    let namaPendek = input[1].slice(0, 15);
    console.log(namaPendek);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
// ```