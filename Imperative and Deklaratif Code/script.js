// Imperative Code = memberi perintah kode
// Example :

const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = [];

for(let i=0; i<names.length; i++) {
    uppercaseNames[i] = names[i].toLocaleUpperCase();
}

console.log(uppercaseNames); // Hasil =  ['ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI']


// Deklaratif Code = Ringkas dan jelas
// Example :

const uppercaseNamesDek = names.map((name) => name.toLocaleUpperCase());
console.log(uppercaseNamesDek); // Hasil = ['ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI']