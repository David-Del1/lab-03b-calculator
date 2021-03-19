const inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {
    const pushed = obj.innerHTML;

    if(pushed == '=') {
        // Evaluate here
        inputLabel.innerHTML = eval(inputLabel.innerHTML); 
    } else if (pushed == 'AC') {
        inputLabel.innerHTML = '0';
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}







