let counter = document.getElementById("counter")
let dict = {}
let innerText = {}

function theCounter() {
    
}


function incrementCounter(){
    let num = parseInt(counter.innerText)
    num++
    counter.innerText = num 
}

function decrementCounter() {
    let num = parseInt(counter.innerText)
    num--
    counter.innerText = num
}

function heartsCounter() {
    let faveNum = parseInt(counter.innerText)
    let ul = document.querySelector("body ul")

    // Store count of favorited numbers
    if (dict[faveNum] === undefined) {
        dict[faveNum] = 1;
    } else {
        dict[faveNum] += 1;
    }

    let count = dict[faveNum];
    let li = document.createElement("li")

    if (innerText[faveNum] === undefined) {
        innerText[faveNum] = `${faveNum} has been liked ${count} time`
        li.innerText = innerText[faveNum]
        ul.appendChild(li)
        li.dataset.id = `${faveNum}`
    } else {
        console.log(faveNum)
        let currentLi = ul.querySelector(`li[data-id="${faveNum}"]`)
        currentLi.innerText = `${faveNum} has been liked ${count} times`
    }
}

let body = document.querySelector("body");

body.addEventListener("click", function(event){
    if (event.target.matches("button#plus")){
       incrementCounter()
    } else if (event.target.matches("button#minus")){
        decrementCounter()
    } else if (event.target.matches("button#heart")){
        heartsCounter()
    }
})
