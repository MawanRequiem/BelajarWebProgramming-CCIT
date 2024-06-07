var nama = prompt("Masukan Nama");
var umur = prompt("Masukan Umur");

dataDiri();

function dataDiri(){
    if(umur < 18){ 
        alert("Nama anda "+nama+"\nAnda Minor");
    } else {
        alert("Nama anda "+nama+"\nAnda Major");
    }
}


khkjhalert(
    "Jenis-Jenis Wibu 2SE1 : \n"+
    "1. Wibu Baby Blues \n"+
    "2. Wibu Pemakan Ternak Warga \n"+
    "3. Wibu Denial \n"+
    "4. Wibu Tak Tertolong"
);