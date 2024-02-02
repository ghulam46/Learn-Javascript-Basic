// References of Documentation https://thevalleyofcode.com/js-array-functions/1-map
// map()
const a = ["satu", "dua", "tiga"];
const d = [1,2,3,4,5,6,7,8,9,10];
const b = a.map(angka => console.log(angka));
const c = a.map((angkaA, angkaB, angkaC) => console.log(angkaA, angkaB, angkaC))

const filterNumbers = d.map((angkaFilter, index) => {
    if(index > 3) {
        console.log(angkaFilter); // result : 5,6,7,8,9,10
    }
}); 