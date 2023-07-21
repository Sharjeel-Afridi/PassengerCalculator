let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
    
}

function decrement() {
    if (count > 0 ){
        count -= 1
    }
    countEl.innerText = count
}

function save() {
    if (count > 0){
        let countStr = count + " - "
        saveEl.textContent += countStr
        count = 0
        countEl.innerText = count
    } else {
        alert("Can not save 0");
    }
}