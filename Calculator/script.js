let input = document.getElementById('operations');
const output = document.getElementById('result');
const keys = document.getElementById('keys');

// const buttons = document.querySelectorAll('keys')

/**Functions*/

function evaluateExpression(expr) {
    try {
        // Use eval carefully! Only for simple calculator input
        return eval(expr);
    } catch {
        return 'Error';
    }
}

function clearAll(){
    input.value="";
    output.innerHTML='result'
}
function deleteLast(){
    input.value = input.value.slice(0,-1);
}
function square(){
    const val = parseFloat(input.value);
    if(!isNaN(val)){
        let sqr= val*val;
        input.value='';
        output.textContent=sqr;
    }
    else{
        output.textContent='Error'
    }
}

function percentage(){
    const result = (evaluateExpression(input.value))/100;
    input.value=input.value + "%";
    output.textContent=result;
    return;
}


/**Event */

keys.addEventListener('click', (e)=>{
    
    e.preventDefault();
    
    const clicked_btn = e.target;

    if (clicked_btn.tagName !== 'BUTTON') return;   // Ignore clicks outside buttons

    const value = clicked_btn.textContent.trim();

    switch(value){
        case 'AC':
            clearAll();
            break;
        case 'X':
            deleteLast();
            break;
        case 'sqr':
            square();
            break;
        case '=':
            const res=evaluateExpression(input.value);
            output.textContent=res;
            break;
        case '%':
            percentage();    
            break;
        default:
            input.value+=value;
            break;
                

    }
})
