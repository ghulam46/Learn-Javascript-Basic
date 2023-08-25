// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Error!")), 1000);
// });

// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

new Promise((resolve, reject) => {
    setTimeout(() => resolve("Value"), 1000);
})
    .finally(() => alert("Promise Ready"))
    .then(result => alert(result));
