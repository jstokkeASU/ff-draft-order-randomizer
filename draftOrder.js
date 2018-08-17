// JavaScript source code
let quantity = 0;

function hideButton() {
    const elem1 = parseInt(document.getElementById("quantity").value);
    document.getElementById("check").innerHTML = "Value: "+elem1.value;
    if (elem1 == null) {
        document.getElementById("subNum").style = "hidden";
    }
}
function getNumber() {
    const elem1 = parseInt(document.getElementById("quantity").value);
    if (isNaN(elem1) === true) {
        alert("You must enter a number");
        return;
    }
    genFields(elem1);
}

function genFields(number) {
    const elem2 = document.getElementById("names");
    while (elem2.hasChildNodes()) {
        elem2.removeChild(elem2.lastChild);
    }
    genTextFields(elem2, number);
    genNumInput(elem2);
    genButton(elem2, "Generate Order", number, 16);
    
}

function genTextFields(element, number) {
    for (i = 0; i < number; i++) {
        element.appendChild(document.createTextNode('Name ' + (i + 1) + ': '));
        const input = document.createElement("input");
        input.type = "text";
        input.name = "player" + i;
        input.value = "Player" + (i + 1);
        input.id = "name" + i;
        element.appendChild(input);
        const lb = document.createElement("br");
        element.appendChild(lb);
    }
}

function genNumInput(element) {
    element.appendChild(document.createTextNode('Select number of Rounds  '));
    const numBox = document.createElement("input");
    numBox.type = "number";
    numBox.id = "rounds";
    numBox.max = 30;
    numBox.value = 1;
    numBox.style.width = "6.5%";//("style", "color:blue; padding:5px");
    element.appendChild(numBox);
}

function genButton(element, label, number, rounds){
    const btn = document.createElement("button");
    const btnName = document.createTextNode(label);
    btn.appendChild(btnName);
    btn.type = "button";
    btn.name = "generate";
    btn.id = "generate";
    btn.style.border = "20px";
    btn.style.color = "white";
    btn.style.backgroundColor = "green";
    btn.onclick = function () {
        const rounds = document.getElementById("rounds").value;
        alert("Rounds:" + rounds);
        let names = [];
        let nums = [];
        for (j = 0; j < number; j++) {
            nums.push(j);
            let tempEl = document.getElementById("name" + j);
            names.push(tempEl.value);
        }
        printPicks(nums, names, rounds);
    };
    element.appendChild(btn);
}

function printPicks(numArray, nameArray, rounds) {
    const number = nameArray.length;
    for (k = 0; k < number; k++) {
        let list = [];
        let random = Math.floor(Math.random() * numArray.length);
        let match = parseInt(numArray[random]);
        for (round = 0; round < rounds; round++) {
            if (round % 2 === 0) {
                list.push(round * number + match + 1);
            }
            else if (round % 2 === 1) {
                list.push(number * (round + 1) - match);
            }
        }
        numArray.splice(random, 1);
        document.getElementById("check2").innerHTML += nameArray[k] + " picks at numbers " + list + "<br />";
    }
}






