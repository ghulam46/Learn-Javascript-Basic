const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
console.log(listContainer)

function addTask() {
    if(inputBox.value === '') {
        alert("Please writing something!");
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = '';
}