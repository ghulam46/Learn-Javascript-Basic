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
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)