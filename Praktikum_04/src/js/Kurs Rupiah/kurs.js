const USD = 9915;
const DollarSingapore = 13.472;
const Ringgit = 874;
const Yen = 120;
const Riyal = 3592;
const Euro = 15888;

addEventListener('keyup', KursCheck);

function KursCheck() {
    const Kurs = document.getElementById("Kurs").value;
    const IDR = document.getElementById("IDR").value;
    if (Kurs == 'USD'){
        var After = IDR * USD;
        document.getElementById("Hasil").value = After;
    } else if (Kurs == 'SingaporeDollar') {
        var After = IDR * DollarSingapore;
        document.getElementById("Hasil").value = After;
    } else if (Kurs == 'Ringgit') {
        var After = IDR * Ringgit;
        document.getElementById("Hasil").value = After;
    }else if (Kurs == 'Euro') {
        var After = IDR * Euro;
        document.getElementById("Hasil").value = After;
    } else if (Kurs == 'Yen') {
        var After = IDR * Yen;
        document.getElementById("Hasil").value = After;
    } else {
        var After = IDR * Riyal;
        document.getElementById("Hasil").value = After;
    }
}