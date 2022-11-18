let count = 0;
let countEl = document.getElementById("count-el")

function inCount() {
    count+=1
    countEl.textContent = count
    // console.log(count)
}




let saveEl = document.getElementById("save-el")
const initial = document.getElementById("save-el").textContent

let save = () => {
    let pE = count + ' - ';
    saveEl.textContent += pE
    countEl.textContent = 0
    count = 0
}

let reset =() => {
    count = 0
    countEl.textContent = count
    saveEl.textContent = initial
}