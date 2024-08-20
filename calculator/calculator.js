const display = document.getElementById("display")
function appendElement(x){
    display.value += x
}

function calculate(){
    try{
        display.value = eval(display.value)

    }
    catch (err){
        display.value = "Error"

    }
}

function clearDisplay() {
    display.value = "";
}
