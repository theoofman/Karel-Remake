const divs = document.getElementsByClassName("inner-box")
const WAIT_TIME = 100
var dogPos = 0;
var facing = "E"
const move = () => {
    if (facing == "E") {
        if (dogPos % 5 != 4) {
            dogPos += 1
        }
    }
    if (facing == "N") {
        if (dogPos > 4) {
            dogPos -= 5;
        }
    }
    if (facing == "W") {
        if (dogPos % 5 != 0) {
            dogPos -= 1;
        }
    }
    if (facing == "S") {
        if (dogPos < 20) {
            dogPos += 5;
        }
    }
}
const turnLeft = () => {
    if (facing == "E") {
        facing = "N";
    }
    else if (facing == "N") {
        facing = "W"
    }
    else if (facing == "W") {
        facing = "S"
    }
    else if (facing == "S") {
        facing = "E"
    }
}
const putBall = () => {
    divs[dogPos].classList.add("ball");
}
const takeBall = () => {
    divs[dogPos].classList.remove("ball");
}
const codeBlocks = document.getElementById("list");
var actions = document.getElementsByClassName("activeBlock")
document.getElementById("move").onclick = e => {
    const newEl = document.getElementById("move").cloneNode(true)
    newEl.removeAttribute("id")
    newEl.classList.add("activeBlock")
    newEl.classList.add(actions.length)
    codeBlocks.appendChild(newEl);
    newEl.onclick = ee => {
        newEl.classList.remove("activeBlock");
        newEl.classList.remove("block");
        newEl.remove()
    }
}
document.getElementById("turnLeft").onclick = e => {
    const newEl = document.getElementById("turnLeft").cloneNode(true)
    newEl.removeAttribute("id")
    newEl.classList.add("activeBlock")
    newEl.classList.add(actions.length)
    codeBlocks.appendChild(newEl);
    newEl.onclick = ee => {
        newEl.classList.remove("activeBlock");
        newEl.classList.remove("block");
        newEl.remove()
    }
}
document.getElementById("putBall").onclick = e => {
    const newEl = document.getElementById("putBall").cloneNode(true)
    newEl.removeAttribute("id")
    newEl.classList.add("activeBlock")
    newEl.classList.add(actions.length)
    codeBlocks.appendChild(newEl);
    newEl.onclick = ee => {
        newEl.classList.remove("activeBlock");
        newEl.classList.remove("block");
        newEl.remove()
    }
}
document.getElementById("takeBall").onclick = e => {
    const newEl = document.getElementById("takeBall").cloneNode(true)
    newEl.removeAttribute("id")
    newEl.classList.add("activeBlock")
    newEl.classList.add(actions.length)
    codeBlocks.appendChild(newEl);
    newEl.onclick = ee => {
        newEl.classList.remove("activeBlock");
        newEl.classList.remove("block");
        newEl.remove()
    }
}
var hasRan = false;
const hasRanEl = document.createElement("div");
hasRanEl.innerHTML = "Karelripoff has moved, please reset"
hasRanEl.id = "hasRan"
document.getElementById("buttonContainer").appendChild(hasRanEl)
document.getElementById("hasRan").style.visibility = "hidden"
const runActions = async () => {
    if (!hasRan) {
        for (let i = 0; i < actions.length; i++) {
            const element = actions[i].innerHTML;
            console.log(element)
            if (element == "Move") {
                setTimeout(move, i * WAIT_TIME); // Delay the move action by i * 100ms
            } else if (element == "Turn Left") {
                setTimeout(turnLeft, i * WAIT_TIME); // Delay the turnLeft action by i * 100ms
            } else if (element == "Put Ball") {
                setTimeout(putBall, i * WAIT_TIME);
            } else if (element == "Take Ball") {
                setTimeout(takeBall, i * WAIT_TIME);
            }
        }
    }

    hasRan = true;
    document.getElementById("hasRan").style.visibility = "visible";
}


const reset = () => {
    dogPos = 0;
    facing = "E";
    hasRan = false;
    document.getElementById("hasRan").style.visibility = "hidden"
    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        element.classList.remove("ball");
    }
}

setInterval(() => {
    divs[dogPos].classList.add("dog")
    switch (facing) {
        case "N":
            divs[dogPos].classList.add("N");
            divs[dogPos].classList.remove("E");
            divs[dogPos].classList.remove("S");
            divs[dogPos].classList.remove("W");
            console.log("facing n")
            break;
        case "W":
            divs[dogPos].classList.add("W");
            divs[dogPos].classList.remove("E");
            divs[dogPos].classList.remove("S");
            divs[dogPos].classList.remove("N");
            break;
        case "E":
            divs[dogPos].classList.add("E");
            divs[dogPos].classList.remove("W");
            divs[dogPos].classList.remove("S");
            divs[dogPos].classList.remove("N");
            break;
        case "S":
            divs[dogPos].classList.add("S");
            divs[dogPos].classList.remove("E");
            divs[dogPos].classList.remove("W");
            divs[dogPos].classList.remove("N");
            break;
    }
    for (var i = 0; i < divs.length; i++) {
        if (i != dogPos) {
            divs[i].classList.remove("dog");
        }
    }
}, 100)