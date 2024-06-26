
const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Menyimpan daftar users

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMap, { showHidden: true }));
}, 20000);

/* output
WeakMap {  }
*/