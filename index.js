let count = 0
let clicks = 0;
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const decrementEl = document.getElementById("decrement-btn")
const incrementEl = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")

incrementEl.addEventListener("click",function increment() {
    count += 1
    countEl.innerText = count
    
} 
)

decrementEl.addEventListener("click", function decrement() {
    if (count > 0 ){
        count -= 1
    }
    countEl.innerText = count
}
)

saveBtn.addEventListener("click", function save() {
    
    if (count > 0){
        if (clicks === 0){
            let countStr = count
            saveEl.textContent += countStr
            count = 0
            countEl.innerText = count
        } else {
            let countStr = " - " + count
            saveEl.textContent += countStr
            count = 0
            countEl.innerText = count
        }
        clicks += 1;
    } else {
        alert("Can not save 0");
    }
}
)

