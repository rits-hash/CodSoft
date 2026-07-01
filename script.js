const display =
document.getElementById("display");

const historyList =
document.getElementById("history-list");

function append(value){

    display.value += value;
}

function clearDisplay(){

    display.value = "";
}

function deleteLast(){

    display.value =
    display.value.slice(0,-1);
}

function calculate(){

    try{

        const expression =
        display.value;

        const result =
        eval(expression);

        display.value = result;

        const item =
        document.createElement("li");

        item.textContent =
        `${expression} = ${result}`;

        historyList.prepend(item);

    }

    catch{

        display.value = "Error";
    }
}

/* Keyboard Support */

document.addEventListener(
"keydown",
(e)=>{

    const key = e.key;

    if(
        "0123456789+-*/.%"
        .includes(key)
    ){

        append(key);
    }

    if(key==="Enter"){

        calculate();
    }

    if(key==="Backspace"){

        deleteLast();
    }

    if(key==="Escape"){

        clearDisplay();
    }

});